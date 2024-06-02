const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../utils/config')

function verifyUser (req, res, next) {
    const auth_header = req.header('authorization')
    if (auth_header)
        if (auth_header.toLowerCase().startsWith('bearer ')) {
            const token = auth_header.substring(7)
            try {
                const decoded = jwt.verify(token, SECRET_KEY)
                req.user = decoded
                next()
            }
            catch (e) {
                console.log(e)
                res.status(500).json(e)
            }
        }
    else
        res.status(401).json({error: 'No token was provided'})
}

module.exports = { verifyUser }