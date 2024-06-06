import db from '../utils/database'

function signIn (username : any, password : any) {
    return db.oneOrNone(
        'SELECT * FROM users WHERE username = $1 AND hashed_password = $2',
        [username, password]
    )
}

function signUp (username : any, password : any) {
    const query = `
        INSERT INTO users (username, hashed_password) 
        VALUES ($1, $2)
        RETURNING *;`;

    return db.one(query, [username, password]);
}


export const AuthModel = { signIn, signUp }