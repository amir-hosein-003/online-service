import mongoose, { Document, Schema } from "mongoose";

export interface SupportInterface extends Document {
    userId: mongoose.Types.ObjectId;
    subject: string;
    message: string;
    status: "open" | "inReview" | "closed";
    reply: string;
}

const supportSchema = new Schema<SupportInterface & Document>(
    {
        userId: {type: Schema.Types.ObjectId, required: true, ref: "user"},
        subject: {type: String, required: true},
        message: {type: String, required: true},
        status: {
            type: String,
            enum: ["open", "inReview", "closed"],
            default: "open",
        },
        reply: {type: String, default: ""},
    },
    {
        timestamps: true,
    }
);

const supportModel = mongoose.models.support || mongoose.model<SupportInterface>("support", supportSchema);

export default supportModel;