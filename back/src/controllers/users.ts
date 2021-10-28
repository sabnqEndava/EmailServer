const Users = require("./../models/users");

function testInsert(req: any, res:any){
    const testUser = new Users({
        name: 'john doe',
        email: 'john.doe@mail.com',
    });

    try{
        testUser.save((err: any, user:any)=>{
            if (err) throw Error(err);
            console.log("user created");
            return res.status(200).json({
                status:200,
                response:user
            })
        });
    }catch (error){
        res.status(400).json({
            status:400,
            response:error
        });
    }
}

function testGet(req: any, res:any){
    try{
        Users.find((err: any, user:any)=>{
            if (err) throw Error(err);
            return res.status(200).json({
                status:200,
                response:user
            })
        });
    }catch (error){
        res.status(400).json({
            status:400,
            response:error
        });
    }
}

function testPostEmail(req: any, res:any){
    try{
        const newEmail = {
            sender: "zulma.castaneda@email.com",
            receiver: "santiago.pena@email.com",
            subject: "Ray Tomlinson wrote the first email",
            body: "It was sent in 1971, even before the web was invented!",
            date: "2021-10-26T03:00:29.000Z",
            summary: "It was sent in 1971, even before the web was ..."
        }
        Users.findOne({email: 'santiago.pena@email.com'},(err: any, user:any)=>{
            if (err) throw Error(err);
            console.log(user.received_emails)
            user.received_mails.push(newEmail)
            user.save((err: any)=>{
                if (err) throw Error(err);
                console.log("email created");
            })
            return res.status(200).json({
                status:200,
                response:user
            })
        });
    }catch (error){
        res.status(400).json({
            status:400,
            response:error
        });
    }
}

module.exports = {testInsert, testGet, testPostEmail}