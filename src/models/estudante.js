const estudante = (sequelize, DataTypes) => {
    const Estudante = sequelize.define('Estudante', {
      nome: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false 
      },
      ch: {
        type: DataTypes.INTEGER
      }
    }, {
      tableName: 'estudante'
    })
    
    return Estudante
}

module.exports = estudante
