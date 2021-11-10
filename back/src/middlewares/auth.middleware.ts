import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { env } from '../config/config';



export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["x-access-token"] as string;

  if (!token) {
    return res.status(403).send({ message: "Access Denied: No token provided" });
  }

  jwt.verify(token, env().app.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Access Denied" });
    }
    next();
  })
}