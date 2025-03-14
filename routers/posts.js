const express = require('express')
const router = express.Router()
const posts = require('../bonus/posts')

// Index (GET) -> visualizzare tutti gli elementi
router.get('/', (req, res) => {
    //res.send('Lista dei post')
    res.json(posts) // Restituisco l'array di posts.js
})

// Show (GET) -> Visualizzare un elemento (id)
router.get('/:id', (req, res) => {
    //res.send(`Post visualizzato: ${req.params.id}`)
    res.json(posts[req.params.id])
})

// Create (POST) -> Creare nuovo elemento
router.post('/', (req, res) => {
    res.send('Creazione Nuovo Post')
})

// Update (PUT) -> Modificare interamente un elemento (id)
router.put('/:id', (req, res) => {
    res.send(`Modifica completa post con id: ${req.params.id}`)
})

// Update (PATCH) -> Modificare parzialmente un elemento (id)
router.patch('/:id', (req, res) => {
    res.send(`Modifica parziale post con id: ${req.params.id}`)
})

// Delete (DELETE) -> Eliminare un elemento (id)
router.delete('/:id', (req, res) => {
    res.send(`Cancellazione post con id: ${req.params.id}`)
})

module.exports = router