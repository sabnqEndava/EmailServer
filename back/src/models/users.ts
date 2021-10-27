
const mongoose2 = require('mongoose')
const Emails = require("./email")
const UserSchema = new mongoose2.Schema({
    name: {
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    // received_emails:{
    //     ref: Emails,
    //     default: []
    // }
})

const User = mongoose2.model("User", UserSchema);

module.exports = User;