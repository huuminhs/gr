require('dotenv').config()
const POSTGRES_URL = process.env.POSTGRES_URL
const PORT = process.env.PORT
const SECRET_KEY = process.env.SECRET_KEY

module.exports = {
  POSTGRES_URL,
  PORT,
  SECRET_KEY
}