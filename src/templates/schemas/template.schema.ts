import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type TemplateDocument = Template & Document;

export enum LayoutType {
    DEFAULT = "default",
    TIMELINE = "timeline",
    VALENTINE = "valentine",
}

@Schema({ timestamps: true })
export class Template {

    @Prop({ required: true })
    title!: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    })
    category!: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    previewImage!: string;

    @Prop({ default: false })
    isPaid!: boolean;
 
    @Prop({ required: true })
    price!: number;

    @Prop({ required: true })
    themeColor!: string;

    @Prop({
        enum: LayoutType,
        default: LayoutType.DEFAULT,
    })
    layout!: LayoutType;
}

export const TemplateSchema = SchemaFactory.createForClass(Template);
