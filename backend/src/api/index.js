const  express = require('express')

const  cursosRouter = require('./cursos')
const  estudantesRouter = require('./estudantes')

const router = express.Router()

router.get('/' , (_req , res) => {
  res.send('App online!')
})

router.use('/cursos', cursosRouter)
router.use('/estudantes', estudantesRouter)

module.exports = router