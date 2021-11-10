
import { Schema, model, Model } from 'mongoose';
import { IUser } from '../types/types';

import { EmailSchema } from "./email";
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 100,
    },
    received_mails: [EmailSchema]
})

const User: Model<IUser> = model("User", UserSchema);

export = User;