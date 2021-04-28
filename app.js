const express = require('express')
const routers = require ('./api')
const { sequelize } = require('./models')

const app = express()

app.use(express.json())
app.use('/', routers)

sequelize.sync().then(() => {
  console.log('conectado com banco de dados.')
})

app.listen(3000, () => {
  console.log('App online!')
})

