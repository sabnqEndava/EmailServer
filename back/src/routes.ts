import { getAllEmailsByUser, postEmail, createUser, logIn, getAllUsers } from './controllers/users';
import { verifyToken } from './middlewares/auth.middleware';
import { checkEmailUniqueness } from './middlewares/signUp.middleware';
export class Routes {
    constructor(app: any) {
        app.post('/user/:email', [verifyToken], postEmail)
        app.get('/user/:email', [verifyToken], getAllEmailsByUser)
        app.post('/user/', [checkEmailUniqueness], createUser)
        app.get('/user/auth', [checkEmailUniqueness], logIn)
        app.get('/', [verifyToken], getAllUsers)
    }
}