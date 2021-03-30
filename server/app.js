const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postsRouter = require('./routes/postRoutes');
const app = express()

app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(express.json({ limit: "30mb", extended: true }))
app.use(cors())
app.use("/posts", postsRouter)

const DB_URL = "mongodb://ilias:ilias1994@cluster0-shard-00-00.l5qlu.mongodb.net:27017,cluster0-shard-00-01.l5qlu.mongodb.net:27017,cluster0-shard-00-02.l5qlu.mongodb.net:27017/mern-memories?ssl=true&replicaSet=atlas-q2g86s-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(5000, () => console.log("server connected to DB"))
}).catch(error => {
    console.log(error)
})
