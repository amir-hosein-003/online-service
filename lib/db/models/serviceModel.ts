import mongoose, { Schema } from "mongoose";

type ServiceFormFields = {
  title: string;
  placeholder: string;
};

type ServiceSelectBox = {
  option: string;
  value: string;
  price: string;
};

export interface ServiceInterface extends Document {
  name: string;
  description: string;
  price: number;
  formFields?: ServiceFormFields[];
  selectBox?: ServiceSelectBox[];
  isActive: boolean;
}

const serviceSchema = new Schema<ServiceInterface & Document>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    formFields: {
      type: [
        {
          title: { type: String, required: true },
          placeholder: { type: String, required: true },
        },
      ],
      default: [],
    },

    selectBox: {
      type: [
        {
          option: { type: String, required: true },
          value: { type: String, required: true },
          price: { type: String, required: true },
        },
      ],
      default: [],
    },
    isActive: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const serviceModel =
  mongoose.models.service ||
  mongoose.model<ServiceInterface>("service", serviceSchema);

export default serviceModel;
