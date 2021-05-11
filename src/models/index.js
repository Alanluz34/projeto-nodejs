const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Curso = require('./curso')
const Estudante = require('./estudante')

const curso = Curso(sequelize, Sequelize.DataTypes)
const estudante = Estudante(sequelize, Sequelize.DataTypes)

const db = {
    curso,
    estudante,
    sequelize
}

module.exports = db