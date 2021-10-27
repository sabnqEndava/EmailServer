const App = require('./src/app');

const app = new App();
app.initServer(process.env.APP_PORT);