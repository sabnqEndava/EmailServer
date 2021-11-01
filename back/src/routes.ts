const { getAllEmailsByUser, postEmail, getAllUsers } = require('./controllers/users');

export class Routes {
    constructor(app: any){
        app.post('/user/:id', postEmail )
        app.get('/user/:id', getAllEmailsByUser )
        app.get('/', getAllUsers)
    }

}