import { EmailSchema } from "../models/email";
import jwt from 'jsonwebtoken';
import { Response } from 'express';
import bcrypt from 'bcryptjs';
const { socket } = require('../socket')

import Users from './../models/users';
import { AuthBody, CreateUserBody, CustomRequest, IUser } from "../types/types";
import { env } from "../config/config";

function createUser(req: CustomRequest<CreateUserBody>, res: Response) {
    const user: IUser = new Users({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
    });

    user.save((err, _) => {
        if (err) {
            return res.status(500).send({ message: err })
        }

        return res.status(201).send({ message: "User created successfully" })
    })
};

function logIn(req: CustomRequest<AuthBody>, res: Response) {
    Users.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if (err) {
            return res.status(500).send({ message: err });
        }
        if (!user) {
            return res.status(404).send({ message: "User Not Found." });
        }
        const passwordCheck = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordCheck) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        const token = jwt.sign({ id: user.id }, env().app.secret, {
            expiresIn: 86400 // 24 hours
        });

        return res.status(200).send({
            id: user._id,
            name: user.name,
            email: user.email,
            accessToken: token,
        })
    })
}



function getAllEmailsByUser(req: any, res: any) {
    try {
        Users.findOne({ id: req.params.id }, (err: any, user: any) => {
            if (err) throw Error(err);
            return res.status(200).json({
                status: 200,
                response: user.received_mails
            })
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            response: error
        });
    }
}

function postEmail(req: any, res: any) {
    const newEmail = {
        sender: req.body.sender,
        receiver: req.body.receiver,
        subject: req.body.subject,
        body: req.body.body,
        date: new Date(),
        summary: req.body.body.substring(0, 50)
    }
    try {
        Users.findOne({ id: req.params.id }, (err: any, user: any) => {
            if (err) throw Error(err);
            user.received_mails.push(newEmail)
            user.save((err: any) => {
                if (err) throw Error(err);
            })
            socket.io.emit('message', newEmail)
            return res.status(200).json({
                status: 200,
                response: user
            })
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            response: err,
        })
    }
}


function getAllUsers(req: any, res: any) {
    try {
        Users.find((err: any, user: any) => {
            if (err) throw Error(err);
            return res.status(200).json({
                status: 200,
                response: user
            })
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            response: error
        });
    }
}

// function testPostEmail(req: any, res:any){
//     try{
//         const newEmail = {
//             sender: "zulma.castaneda@email.com",
//             receiver: "santiago.pena@email.com",
//             subject: "Ray Tomlinson wrote the first email",
//             body: "It was sent in 1971, even before the web was invented!",
//             date: "2021-10-26T03:00:29.000Z",
//             summary: "It was sent in 1971, even before the web was ..."
//         }
//         Users.findOne({email: 'santiago.pena@email.com'},(err: any, user:any)=>{
//             if (err) throw Error(err);
//             console.log(user.received_emails)
//             user.received_mails.push(newEmail)
//             user.save((err: any)=>{
//                 if (err) throw Error(err);
//                 console.log("email created");
//             })
//             return res.status(200).json({
//                 status:200,
//                 response:user
//             })
//         });
//     }catch (error){
//         res.status(400).json({
//             status:400,
//             response:error
//         });
//     }
// }
export {
    getAllEmailsByUser,
    postEmail,
    createUser,
    logIn,
    getAllUsers,
}
