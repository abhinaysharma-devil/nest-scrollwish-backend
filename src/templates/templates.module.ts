import { Module } from '@nestjs/common';
import { TemplatesService } from './templates.service';
import { TemplatesController } from './templates.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Template, TemplateSchema } from './schemas/template.schema';
import { CategorySchema } from 'src/categories/schemas/category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Template.name, schema: TemplateSchema },
      { name: 'Category', schema: CategorySchema },
    ]),
  ],
  controllers: [TemplatesController],
  providers: [TemplatesService],
})
export class TemplatesModule { }
