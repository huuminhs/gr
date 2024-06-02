const express = require('express')
const authRouter = express.Router();
const { signIn, isTokenExpired } = require('../controller/auth.controller')

authRouter.post('/sign-in', signIn)
authRouter.post('/is-token-expired', isTokenExpired)

module.exports = authRouter;