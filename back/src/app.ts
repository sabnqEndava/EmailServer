import express from 'express';
import { Env } from './config/config'
const { connect }  = require('./db')
const cors = require("cors");
const { testInsert, testGet, testPostEmail } = require('./controllers/users');

const app = express();

export class App {
  constructor(env: Env){
    this.initApp();
    this.routes();
    this.initDatabase(env.mongo.password, env.mongo.name, env.mongo.username);
  }

  initApp(){
    app.use(cors());
    app.use(express.json());
  }

  initDatabase(password: string, dbName: string, username: string){
    connect( `mongodb+srv://${username}:${password}@cluster0.usycy.mongodb.net/${dbName}?retryWrites=true&w=majority`)
  }

  initServer(port:number){
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    })
  }
  routes(){
    app.get("/", testInsert);
    app.get('/users', testGet)
    app.get('/user', testPostEmail)
  }
}

