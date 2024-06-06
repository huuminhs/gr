require('dotenv').config()
const POSTGRES_URL = process.env.POSTGRES_URL
const PORT = process.env.PORT
const SECRET_KEY = <string> process.env.SECRET_KEY
  
export default { 
  POSTGRES_URL,
  PORT,
  SECRET_KEY
}