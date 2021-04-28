const express = require('express')
const router = express.Router()
const { curso } = require('../models')
const CursoService = require('../services/cursos')

const cursoService = new CursoService(curso)


router.get('/', async (req, res) => {
    const cursos = await cursoService.get()
    res.status(200).json(cursos)
})

router.post('/', async (req, res) => {
    const { nome, ch } = req.body
    try{
    await cursoService.adicionar({ nome, ch })
    res.status(201).send('Curso adicionado com sucesso')
    } catch(erro){
      res.status(400).send('Não foi possivel adicionar o curso!')
    }
})

module.exports = router