import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

import { Category, CategoryDocument } from './schemas/category.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { SUCCESS } from 'src/common/response.messages';
import { sendSuccessResponse } from 'src/common/universal.functions';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) { }

  // create(createCategoryDto: CreateCategoryDto) {
  //   return 'This action adds a new category';
  // }

  async findAll() {
    try {

      let data = await this.categoryModel.find().exec();

      return sendSuccessResponse(data, SUCCESS.DEFAULT);

    } catch (error) {
      console.error(error);
    }
  }

  async findOne(id: string) {
    try {

      let data = await this.categoryModel.findById(id).exec();

      return sendSuccessResponse(data, SUCCESS.DEFAULT);

    } catch (error) {
      console.error(error);
    }
  }

  // update(id: string, updateCategoryDto: UpdateCategoryDto) {
  //   return `This action updates a #${id} category`;
  // }

  // async remove(id: string) {
  //   try {
  //     let data = await this.categoryModel.findByIdAndDelete(id).exec();
  //     return sendSuccessResponse(data, SUCCESS.DEFAULT);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}
