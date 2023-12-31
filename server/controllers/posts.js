
import PostMessage from "../models/postMessage.js"

export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find({})
        return res.status(200).json(postMessages)
    }catch(err){
        return res.status(404).json({message : err.message});
    }
}

export const createPost = async (req, res) => {
    try{
        const post = req.body;
        const newPost = new PostMessage(post)
        await newPost.save()
        // const newPost = await PostMessage.create(post)
        // res.status(201).json(newPost)
    }catch(err){
        res.status(409).json({message:err.message})
    }
}