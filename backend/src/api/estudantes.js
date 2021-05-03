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

router.post('/',
body('nome').not().isEmpty().trim().escape(),
check('ch')
  .not().isEmpty()
  .matches(/\d/)
  .withMessage('Deve ser um nome válido.'), 
async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { nome, ch } = req.body
  try{
  await cursoService.adicionar({ nome, ch })
  res.status(201).send('Estudante adicionado com sucesso')
  } catch(erro){
    res.status(400).send(erro.message)
  }
})

module.exports = router