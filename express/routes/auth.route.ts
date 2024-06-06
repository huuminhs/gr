const express = require('express')
const authRouter = express.Router();
import AuthController from "../controllers/auth.controller";

authRouter.post('/sign-in', AuthController.signIn)
authRouter.post('/sign-up', AuthController.signUp)
authRouter.post('/is-token-expired', AuthController.isTokenExpired)

export default authRouter