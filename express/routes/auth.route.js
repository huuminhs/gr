const express = require('express')
const authRouter = express.Router();
const { signIn, signUp, isTokenExpired } = require('../controller/auth.controller')

authRouter.post('/sign-in', signIn)
authRouter.post('/sign-up', signUp)
authRouter.post('/is-token-expired', isTokenExpired)

module.exports = authRouter;