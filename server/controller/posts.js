const mongoose = require('mongoose');
const Post = require('../model/Post');

const getPost = async (req, res) => {
    const { id } = req.params
    
    try {
        const post = await Post.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const updatePost = async (req, res) => {
    const { id } = req.params
    const { title, message, creator, selectedFile, tags } = req.body
    const post = { _id: id , title, message, creator, selectedFile, tags }

    if (mongoose.Types.ObjectId.isValid(id)) {
        const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true })
        res.status(200).json(updatedPost)
    } else {
        res.status(404).json({ message: `no post with id: ${id}` })
    }
}

const createPost = async (req, res) => {
    const { title, message, creator, selectedFile, tags } = req.body
    const post = new Post({ title, message, creator, selectedFile, tags })
    try {
        const newPost = await post.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const deletePost = async (req, res) => {
    const { id } = req.params
    if (mongoose.Types.ObjectId.isValid(id)) {
        await Post.findByIdAndRemove(id)
        res.json({ message: "post deleted" })
    } else {
        res.status(404).json({ message: `no post with id: ${id}` })
    }
}

module.exports = {
    createPost,
    getPost,
    getPosts,
    updatePost,
    deletePost
};
