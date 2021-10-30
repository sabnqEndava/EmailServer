import { env } from './src/config/config';
import  {App}  from './src/app';

const envVariables = env();

const app = new App(envVariables);
app.initServer(envVariables.app.port);