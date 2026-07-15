import { Schema, model, models, Document } from "mongoose";

export interface IArticle extends Document {
  title: string;
  slug: string;
  image: string;
  date: string;
  description: string;
}
