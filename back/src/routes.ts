import { getAllEmailsByUser, postEmail, createUser, logIn, getAllUsers } from './controllers/users';
export class Routes {
    constructor(app: any) {
        app.post('/user/:email', postEmail)
        app.get('/user/:email', getAllEmailsByUser)
        app.post('/user/', createUser)
        app.get('/user/auth', logIn)
        app.get('/', getAllUsers)

    }
}