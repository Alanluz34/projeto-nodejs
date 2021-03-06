const express = require('express')
const router = express.Router()
const { estudante } = require('../models')
const EstudanteService = require('../services/estudantes')
const { body, check, validationResult } = require('express-validator');

const estudanteService = new EstudanteService(estudante)

router.get('/', async (req, res) => {
  const estudantes = await estudanteService.get()
    res.status(200).json(estudantes)
})

router.post('/', async (req, res) => {
  const { nome, matricula, email } = req.body
  try {
  await estudanteService.adicionar({ nome, matricula, email })
  res.status(201).json({ message: 'Estudante adicionado com sucesso!' })
  } catch (erro) {
    console.log('erro.message', erro.message)
    res.status(400).send({ message: erro.message })
    }
})

module.exports = router