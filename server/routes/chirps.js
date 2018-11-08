const express = require('express');
const chirpsStore = require('../chirpstore')
let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    id ? res.json(chirpsStore.GetChirp(id)) : res.send(chirpsStore.GetChirps())
});

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let text = req.params.body;
    id ? res.json(chirpsStore.UpdateChirp(id, text)) : res.sendStatus(403)
});


module.exports = router;