
// module.exports = () => ({
//     mongo:{
//         port: process.env.DB_NAME
//     }
// })
export interface Env {
  app: {
    port: number;
  };
  mongo: {
    name: string;
    username: string;
    password: string;
  }
}
export const env = (): Env => ({
  app: {
    // name: process.env.APP_NAME,
    port: Number(process.env.APP_PORT) || 3000,
    // environment: process.env.APPLICATION_ENV,
    // logpath: process.env.LOG_PATH,
  },
  mongo: {
    name: process.env.DB_NAME as string,
    username: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
  }
})