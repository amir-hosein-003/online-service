import mongoose, { Document, Schema } from "mongoose";

export interface OrderInterface extends Document {
    userId: mongoose.Types.ObjectId;
    serviceId: mongoose.Types.ObjectId;
    formData: string[];
    status: "pending" | "inProgress" | "completed" | "canceled";
    isPaid: boolean;
}

const orderSchema = new Schema<OrderInterface & Document>(
    {
        userId: {type: Schema.Types.ObjectId, required: true, ref: "user"},
        serviceId: {type: Schema.Types.ObjectId, required: true, ref: "service"},
        formData: [{type: String, required: true}],
        status: {
            type: String,
            enum: ["pending", "inProgress", "completed", "canceled"],
            default: "pending",
        },
        isPaid: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    }
);

const orderModel = mongoose.models.order || mongoose.model<OrderInterface>("order", orderSchema);

export default orderModel;