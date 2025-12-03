import mongoose, { Document, Schema } from "mongoose";

export interface CategoryInterface extends Document {
  name: string;
  description: string;
  isActive: boolean;
}

const categorySchema = new Schema<CategoryInterface & Document>(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const categoryModel =
  mongoose.models.category ||
  mongoose.model<CategoryInterface>("category", categorySchema);

export default categoryModel;
