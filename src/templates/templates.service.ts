import { Injectable } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { sendSuccessResponse } from 'src/common/universal.functions';
import { ERROR, SUCCESS } from 'src/common/response.messages';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Template, TemplateDocument } from './schemas/template.schema';
import { Model } from 'mongoose';
import { CategoryDocument } from 'src/categories/schemas/category.schema';

@Injectable()
export class TemplatesService {

  constructor(
    @InjectModel(Template.name) private templateModel: Model<TemplateDocument>,
    @InjectModel('Category') private categoryModel: Model<CategoryDocument>,
  ) { }

  // create(createTemplateDto: CreateTemplateDto) {
  //   return 'This action adds a new template';
  // }

  async findAll(query: any) {
    try {

      let filter: any = {};

      if (query.categorySlug) {
        const category = await this.categoryModel.findOne({ slug: query.categorySlug });
        if (category) {
          filter.category = category._id;
        }
      }

      let data = await this.templateModel.find(filter).populate('category').exec();

      return sendSuccessResponse(data, SUCCESS.DEFAULT);

    } catch (error) {
      console.error(error);
    }
  }

  async findOne(id: number) {
    try {

      let data = await this.templateModel.findById(id).populate('category').exec();
      return sendSuccessResponse(data, SUCCESS.DEFAULT);

    } catch (error) {

      return sendSuccessResponse(null, ERROR.DEFAULT);

    }
  }

  // update(id: number, updateTemplateDto: UpdateTemplateDto) {
  //   return `This action updates a #${id} template`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} template`;
  // }
}
