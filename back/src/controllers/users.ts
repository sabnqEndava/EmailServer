import { EmailSchema } from "../models/email";

const Users = require("./../models/users");

function getAllEmailsByUser(req: any, res:any){
    try{
        Users.findOne({email:req.params.email},(err: any, user:any)=>{
            if (err) throw Error(err);
            return res.status(200).json({
                status:200,
                response:user.received_mails
            })
        });
    }catch (error){
        res.status(400).json({
            status:400,
            response:error
        });
    }
}

function postEmail(req:any, res:any){
    const newEmail ={
        sender: req.body.sender,
        receiver: req.body.receiver,
        subject: req.body.subject,
        body: req.body.body,
        date: new Date(),
        summary: req.body.body.substring(0,50)
    }
     try{
        Users.findOne({email:req.params.email},(err: any, user:any)=>{
            if (err) throw Error(err);
            user.received_mails.push(newEmail)
            user.save((err: any)=>{
                if (err) throw Error(err);
            })
            return res.status(200).json({
                status:200,
                response:user
            })
        });
     }catch(err){
         res.status(400).json({
             status:400,
             response:err,
         })
     }
}


// function testInsert(req: any, res:any){
//     const testUser = new Users({
//         name: 'john doe',
//         email: 'john.doe@mail.com',
//     });

//     try{
//         testUser.save((err: any, user:any)=>{
//             if (err) throw Error(err);
//             console.log("user created");
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

// function testGet(req: any, res:any){
//     try{
//         Users.find((err: any, user:any)=>{
//             if (err) throw Error(err);
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

module.exports = { getAllEmailsByUser, postEmail}