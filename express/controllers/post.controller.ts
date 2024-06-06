import { PostModel } from '../models/post.model'
import { Request, Response } from 'express'

async function getAllPosts (req : Request, res : Response) {
    try {
        const data = await PostModel.getAllPosts()
        res.json(data)
    }
    catch (error) {
        console.log(error)
    }
}

async function getPost (req : Request, res : Response) {
    try {
        const data = await PostModel.getPost(req.params.id)
        res.json(data)
    }
    catch (error) {
        console.log(error)
    }
}

async function createPost (req : Request, res : Response) {
    
    try {
        const data = await PostModel.createPost(req.body, req.user.username)
        console.log('Data inserted successfully:', data)
    }
    catch (error) {
        console.error('Error inserting data:', error)
    }
    res.send("POST request called");
}

export const PostController = { createPost, getPost, getAllPosts }