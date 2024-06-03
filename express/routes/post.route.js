const express = require('express')
const postRouter = express.Router();
const { getAllPosts, getPost, createPost } = require('../controllers/post.controller');
const { verifyUser } = require('../utils/middleware');

postRouter.get('/', getAllPosts)
postRouter.get('/:id', getPost)
postRouter.post('/', verifyUser, createPost)

module.exports = postRouter;