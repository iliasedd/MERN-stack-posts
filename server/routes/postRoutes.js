const express = require('express');
const router = express.Router()
const { createPost, getPost, getPosts, updatePost, deletePost } = require('../controller/posts');

router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", createPost)
router.patch("/:id", updatePost)
router.delete("/:id", deletePost)

module.exports = router
