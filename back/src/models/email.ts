
const mongoose1 = require('mongoose')
export const EmailSchema = new mongoose1.Schema({
    sender: {
        type:String,
        required: true
    },
    receiver:{
        type:String,
        required:true
    },
    subject:{
        type:String,
    },
    body:{
        type:String
    },
    date:{
        type:Date
    },
    summary:{
        type:String
    }
})
