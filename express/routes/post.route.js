const express = require('express')
const postRouter = express.Router();
const { getAllPosts, getPost, createPost } = require('../controller/post.controller')

postRouter.get('/', getAllPosts)
postRouter.get('/:id', getPost)
postRouter.post('/', createPost)

module.exports = postRouter;