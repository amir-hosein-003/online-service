import mongoose, { Document, Schema } from "mongoose";


export interface UserInterface extends Document {
    name: string;
    phone: string;
    password: string;
    role: "ADMIN" | "OPERATOR" | "USER";
}

const userSchema = new Schema<UserInterface & Document>(
    {
        name: {type: String, required: true},
        phone: {type: String, required: true},
        password: {type: String, required: true},
        role: {
            type: String,
            required: true, 
            enum: ["ADMIN" , "OPERATOR" , "USER"],
            default: "USER"
        },
    }, 
    {
        timestamps: true
    }
);

const userModel = mongoose.models.user || mongoose.model<UserInterface>("user", userSchema);

export default userModel;