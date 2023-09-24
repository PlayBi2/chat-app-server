const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const postsRouter = require('./routes/posts.router')
const authRouter = require('./routes/auth.router')
const roomRouter = require('./routes/room.router')
const messageRouter = require('./routes/message.router')

app.use("/api/v1/posts", postsRouter)
app.use("/api/v1/auth", authRouter)
app.use('/api/v1/rooms',roomRouter)
app.use('/api/v1/messages',messageRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server is running....")
})