const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.enviar('Lista de Estudantes!')
})

module.exports = router