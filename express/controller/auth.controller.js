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
            const token = jwt.sign({"username": data.username}, SECRET_KEY, {
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



function isTokenExpired (req, res) {
    try {
        const decoded = jwt.verify(req.body.token, SECRET_KEY);
        res.status(200).json(decoded);
    }
    catch (e) {
        res.status(401).json(e)
    }   
}

module.exports = { signIn, isTokenExpired }