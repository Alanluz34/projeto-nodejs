const express = require('express')
const router = express.Router()
const { curso } = require('../models')


router.get('/', async (req, res) => {
    const cursos = await curso.findAll()
    res.json(cursos)
})

router.post('/', async (req, res) => {
    const { nome, ch } = req.body
    await curso.create({ nome, ch })
    res.send('Curso adicionado com sucesso')
})

module.exports = router