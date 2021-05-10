const estudante = (sequelize, DataTypes) => {
    const Estudante = sequelize.define('Estudante', {
      nome: {
        type: DataTypes.STRING,
        allowNull : false 
      },
      matricula: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      }  
    }, {
      tableName: 'estudante'
    })
    
    return Estudante
}

module.exports = estudante
