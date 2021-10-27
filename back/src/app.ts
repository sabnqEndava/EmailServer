import express from 'express';
const { connect }  = require('./db')
const cors = require("cors");

const app = express();

class App {
  constructor(){
    this.initApp();
    // this.routes();
    this.initDatabase();
  }

  initApp(){
    app.use(cors());
    app.use(express.json());
  }

  initDatabase(){
    connect( `mongodb+srv://zcastaneda:${process.env.DB_PASSWORD}@cluster0.usycy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
  }

  initServer(port:string){
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    })
  }
}

module.exports = App;