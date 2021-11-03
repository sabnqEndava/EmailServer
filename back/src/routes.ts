import { getAllEmailsByUser, postEmail, createUser, logIn, getAllUsers } from './controllers/users';
import { verifyToken } from './middlewares/auth.middleware';
import { checkEmailUniqueness } from './middlewares/signUp.middleware';
export class Routes {
    constructor(app: any) {
        app.post('/user/auth', logIn)
        app.post('/user/:id', [verifyToken], postEmail)
        app.get('/user/:id', [verifyToken], getAllEmailsByUser)
        app.post('/user/', [checkEmailUniqueness], createUser)
        app.get('/', [verifyToken], getAllUsers)
    }
}