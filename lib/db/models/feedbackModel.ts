import mongoose, { Document, Schema } from "mongoose";

export interface FeedbackInterface extends Document {
  comment: string;
  rating: number;
  userId: mongoose.Types.ObjectId;
  serviceId: mongoose.Types.ObjectId;
}

const feedbackSchema = new Schema<FeedbackInterface & Document>(
  {
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, required: true, ref: "user" },
    serviceId: { type: Schema.Types.ObjectId, required: true, ref: "service" },
  },
  {
    timestamps: true,
  }
);

const feedbackModel =
  mongoose.models.feedback ||
  mongoose.model<FeedbackInterface>("feedback", feedbackSchema);

export default feedbackModel;
