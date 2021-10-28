
const mongoose2 = require('mongoose')
import { EmailSchema } from "./email";
const UserSchema = new mongoose2.Schema({
    name: {
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    received_mails: [EmailSchema]
})

const User = mongoose2.model("User", UserSchema);

module.exports = User;