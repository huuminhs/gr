const jwt = require('jsonwebtoken')
const db = require('../utils/database')
const { SECRET_KEY } = require('../utils/config')
const Auth = require('../models/auth.model')

const auth = new Auth()

async function signIn (req, res) {
    const data = req.body;

    try {
        const user = await auth.signIn(data.username, data.password)
        
        if (user) {
            const token = jwt.sign({"username": user.username}, SECRET_KEY, {
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

async function signUp (req, res) {
    const data = req.body;

    try {
        const newUser = await auth.signUp(data.username, data.password)
        console.log(newUser)
        res.status(200).json({ success: true })
    }
    catch (error) {
        if (error.code === '23505') {
            res.status(409).json({ success: false, message: "Username is already taken" })
        } else {
            res.status(500).json(error)
        }
    }
}



function isTokenExpired (req, res) {
    try {
        const decoded = jwt.verify(req.body.token, SECRET_KEY);
        res.status(200).json(decoded);
    }
    catch (e) {
        res.status(401).json(e)
    }   
}

module.exports = { signIn, signUp, isTokenExpired }