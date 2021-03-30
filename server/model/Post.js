const mongoose = require('mongoose');

module.exports = mongoose.model("Post", mongoose.Schema({
    title: String,
    creator: String,
    message: String,
    selectedFile: String,
    tags: [String],
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
}))
