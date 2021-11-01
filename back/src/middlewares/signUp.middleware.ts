import { Response, NextFunction } from 'express';
import Users from '../models/users';
import { CreateUserBody, CustomRequest } from '../types/types';

export function checkEmailUniqueness(req: CustomRequest<CreateUserBody>, res: Response, next: NextFunction) {
  Users.findOne({
    email: req.body.email
  }).exec((err, user) => {
    if (err) {
      return res.status(500).send({ message: err });
    }

    if (user) {
      return res.status(400).send({message: "Email already in use"})
    }

    next();
  })
}