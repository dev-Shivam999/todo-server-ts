import mongoose, { Model } from "mongoose";

export interface Todo {
    _id?: string;
    title: string;
    isEditable: boolean;
    isActive: boolean;
}



type UserType = Todo & mongoose.Document;


const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isEditable: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    }
});



const UserModel: Model<UserType> = mongoose.model<UserType>('User', todoSchema);

export default UserModel;
