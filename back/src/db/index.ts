require('dotenv').config()

const mongoose = require('mongoose')
const connect = (url:string) => {
    mongoose
    .connect(url)
    .then(()=>{
        return console.log("Successfully connected to DB")
    })
    .catch((error: any) => {
        return console.log("Error while connecting to DB ", JSON.stringify(error))
    })
}

module.exports =  {connect}