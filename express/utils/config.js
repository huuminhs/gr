require('dotenv').config()
const POSTGRES_URL = process.env.POSTGRES_URL
const PORT = process.env.PORT

module.exports = {
  POSTGRES_URL,
  PORT
}