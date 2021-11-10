import { Document } from 'mongoose';
import { Request } from 'express';


export interface CustomRequest<T> extends Request {
  body: T;
}

export interface CreateUserBody {
  name: string;
  email: string;
  password: string;
}

export interface AuthBody {
  email: string;
  password: string;
}

export interface IUser extends CreateUserBody, Document {};