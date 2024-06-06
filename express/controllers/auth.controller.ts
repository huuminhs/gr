require('dotenv').config()
const jwt = require('jsonwebtoken')
import { Request, Response } from "express"
import { AuthModel } from "../models/auth.model";

async function signIn (req : Request, res : Response) {
    const data = req.body;

    try {
        const user = await AuthModel.signIn(data.username, data.password)
        
        if (user) {
            const token = await jwt.sign({"username": user.username}, process.env.SECRET_KEY, {
                expiresIn: '1m',
            });
            res.status(200).json({ token });
        }
        else {
            res.status(401).json({ message: 'Thông tin đăng nhập không đúng'});
        }
    }
    catch (e : any) {
        console.log(e)
        res.status(500).json({ message: 'Lỗi hệ thống'});
    }
}

async function signUp (req : Request, res : Response) {
    const data = req.body;

    try {
        const newUser = await AuthModel.signUp(data.username, data.password)
        console.log(newUser)
        res.status(200).json({ success: true })
    }
    catch (error : any) {
        if (error.code === '23505') {
            res.status(409).json({ success: false, message: "Username is already taken" })
        } else {
            res.status(500).json(error)
        }
    }
}



function isTokenExpired (req : Request, res : Response) {
    try {
        const decoded = jwt.verify(req.body.token, process.env.SECRET_KEY);
        res.status(200).json(decoded);
    }
    catch (e) {
        res.status(401).json(e)
    }   
}

const AuthController = { signIn, signUp, isTokenExpired }
export default AuthController