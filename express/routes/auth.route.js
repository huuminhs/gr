const express = require('express')
const authRouter = express.Router();
const jwt = require('jsonwebtoken')

const { db } = require('../utils/database')
const { SECRET_KEY } = require('../utils/config')

async function signIn (req, res) {
    const data = req.body;

    try {
        const user = await db.oneOrNone(
            'SELECT * FROM users WHERE username = $1 AND hashed_password = $2',
            [data.username, data.password]
        )
        if (user) {
            const token = jwt.sign(data, SECRET_KEY, {
                expiresIn: '1m',
            });
            res.status(200).json({ token });
        }
        else {
            res.status(401).json({ message: 'Thông tin đăng nhập không đúng'});
        }
    }
    catch (e) {
        res.status(500).json({ message: 'Lỗi hệ thống'});
    }
}

function tokenTest (req, res) {
    try {
        var decoded = jwt.verify(req.body.token, SECRET_KEY);
        res.json({decoded});
    }
    catch (e) {
        res.json({e});
    }   
}

function validateToken (req, res) {
    try {
        var decoded = jwt.verify(req.body.token, SECRET_KEY);
        res.status(200).json(decoded);
    }
    catch (e) {
        res.status(401).json(e)
    }   
}

authRouter.post('/sign-in', signIn)
authRouter.post('/validate-token', validateToken)
authRouter.post('/token-test', tokenTest)

module.exports = authRouter;