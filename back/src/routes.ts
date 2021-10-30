const { getAllEmailsByUser, postEmail } = require('./controllers/users');

export class Routes {
    constructor(app: any){
        app.post('/user/:email', postEmail )
        app.get('/user/:email', getAllEmailsByUser )
    }

}