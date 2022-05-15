const Sequelize = require('sequelize')

// Conexao com o Banco de dados
const sequelize = new Sequelize('projetopreaula', 'root', '@Bk_010354', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}