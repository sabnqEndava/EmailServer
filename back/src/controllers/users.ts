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

module.exports = {testInsert, testGet}