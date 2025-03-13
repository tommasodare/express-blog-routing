const express = require("express")
const app = express()
const port = 3000
const postsRouter = require('./routers/posts')
const posts = require('./bonus/posts_2') // Ho importato l'array di oggetti contenuto in posts_2.js

app.use('/api/v1/posts', postsRouter)
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send("Hello in my server")
})

app.get('/bonus', (req, res) => {
    res.json(posts)
})

app.get('/bonus/:id', (req, res) => {

    for (let index = 0; index < posts.length; index++) {
        const thisPost = `${posts[index].req.params.id}`;
    }
    
    res.json(thisPost)
})