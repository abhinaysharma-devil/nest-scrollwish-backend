import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { TemplatesModule } from './templates/templates.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';

@Module({ 
  imports: [
    // ✅ Load .env globally
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvVars: false,
    }),

    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost/nest'),
    UsersModule,
    CategoriesModule,
    TemplatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes("*"); // apply to all routes 
  }
}
