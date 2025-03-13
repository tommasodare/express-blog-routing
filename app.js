const express = require("express")
const app = express()
const port = 3000
const postsRouter = require('./routers/posts')

app.use('/api/v1/posts', postsRouter)

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send("Hello in my server")
})