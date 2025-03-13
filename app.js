const express = require("express")
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send("Hello in my server")
})

// Index (GET) -> visualizzare tutti gli elementi
app.get('/api/v1/posts', (req, res) => {
    res.send('Lista dei post')
})

// Show (GET) -> Visualizzare un elemento (id)
app.get('/api/v1/posts/:id', (req, res) => {
    res.send(`Post visulizzato: ${req.params.id}`)
})

// Create (POST) -> Creare nuovo elemento
app.post('/api/v1/posts', (req, res) => {
    res.send('Creazione Nuovo Post')
})

// Update (PUT) -> Modificare interamente un elemento (id)
app.put('/api/v1/posts/:id', (req, res) => {
    res.send(`Modifica completa post con id: ${req.params.id}`)
})

// Update (PATCH) -> Modificare parzialmente un elemento (id)
app.patch('/api/v1/posts/:id', (req, res) => {
    res.send(`Modifica parziale post con id: ${req.params.id}`)
})

// Delete (DELETE) -> Eliminare un elemento (id)
app.delete('/api/v1/posts/:id', (req, res) => {
    res.send(`Cancellazione post con id: ${req.params.id}`)
})