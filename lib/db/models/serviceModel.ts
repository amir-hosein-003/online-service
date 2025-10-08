import mongoose, { Schema } from "mongoose";

export interface ServiceInterface extends Document {
    name: string;
    description: string;
    price: number;
    category: mongoose.Types.ObjectId;
    isActive: boolean;
}

const serviceSchema = new Schema<ServiceInterface & Document>(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        price: {type: Number, required: true, default: 0},
        category: { type: Schema.Types.ObjectId, required: true, ref: "category"},
    },
    {
        timestamps: true,
    }
);

const serviceModel = mongoose.models.service || mongoose.model<ServiceInterface>("service", serviceSchema);

export default serviceModel;