import express from 'express';
import { Env } from './config/config'
import { Routes } from './routes'

const app = express();
const { connect }  = require('./db')
const cors = require("cors");
const socket = require('./socket');


export class App {
  constructor(env: Env){
    this.initApp();
    this.routes();
    this.initDatabase(env.mongo.password, env.mongo.name, env.mongo.username);
  }

  initApp(){
    app.use(cors(
      {origin: '*'}
    ));
    app.use(express.json());
    app.use(express.static('public'));
  }

  initDatabase(password: string, dbName: string, username: string){
    connect( `mongodb+srv://${username}:${password}@cluster0.usycy.mongodb.net/${dbName}?retryWrites=true&w=majority`)
  }

  initServer(port:number){
    const server = app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    })
    socket.connectSocket(server);
  }
  routes(){
   const routes = new Routes(app)
  }
}

