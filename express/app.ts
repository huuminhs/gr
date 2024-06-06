require('dotenv').config()
import express from "express";
import cors from 'cors'

const app = express();
import postRouter from './routes/post.route'
import authRouter from './routes/auth.route'

declare module 'express-serve-static-core' {
  export interface Request {
    user: any
  }
}

app.use(express.json());
app.use(cors());

app.use('/api/post', postRouter)
app.use('/api/auth', authRouter)

// ----------------------------------------
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
})
