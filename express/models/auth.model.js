const db = require('../utils/database')

class Auth {
    signIn (username, password) {
        return db.oneOrNone(
            'SELECT * FROM users WHERE username = $1 AND hashed_password = $2',
            [username, password]
        )
    }

    signUp (username, password) {
        const query = `
            INSERT INTO users (username, hashed_password) 
            VALUES ($1, $2)
            RETURNING *;`;

        return db.one(query, [username, password]);
    }

}

module.exports = Auth