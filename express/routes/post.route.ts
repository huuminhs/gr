import express from 'express'
const postRouter = express.Router();
import { PostController } from '../controllers/post.controller'
import { verifyUser } from '../utils/middleware'

postRouter.get('/', PostController.getAllPosts)
postRouter.get('/:id', PostController.getPost)
postRouter.post('/', verifyUser, PostController.createPost)

export default postRouter