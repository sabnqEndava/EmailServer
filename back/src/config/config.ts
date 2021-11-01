export interface Env {
  app: {
    port: number;
    secret: string;
  };
  mongo: {
    name: string;
    username: string;
    password: string;
  }
}
export const env = (): Env => ({
  app: {
    port: Number(process.env.APP_PORT) || 3000,
    secret: process.env.JWT_SECRET as string,
  },
  mongo: {
    name: process.env.DB_NAME as string,
    username: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
  }
})