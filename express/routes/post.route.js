const express = require('express')
const postRouter = express.Router();
const { getAllPosts, getPost, createPost, searchPost } = require('../controllers/post.controller');
const { verifyUser } = require('../utils/middleware');

postRouter.get('/', getAllPosts)
postRouter.get('/:id', getPost)
postRouter.post('/', verifyUser, createPost)
postRouter.post('/search', searchPost)

module.exports = postRouter;