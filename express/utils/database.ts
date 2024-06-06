require('dotenv').config()
import pgPromise from 'pg-promise'

const pgp = pgPromise()
const db = pgp(<string> process.env.POSTGRES_URL);

export default db