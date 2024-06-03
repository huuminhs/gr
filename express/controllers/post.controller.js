const db = require('../utils/database')
const Post = require('../models/post.model')

const post = new Post()

async function getAllPosts (req, res) {
    try {
        const data = await post.getAllPosts()
        res.json(data)
    }
    catch (error) {
        console.log(error)
    }
}

async function getPost (req, res) {
    try {
        const data = await post.getPost(req.params.id)
        res.json(data)
    }
    catch (error) {
        console.log(error)
    }
}

async function createPost (req, res) {
    
    try {
        const data = await post.createPost(req.body, req.user.username)
        console.log('Data inserted successfully:', data)
    }
    catch (error) {
        console.error('Error inserting data:', error)
    }
    res.send("POST request called");
}

module.exports = { createPost, getPost, getAllPosts }