const Sequelize = require('sequelize')

// Conexao com o Banco de dados
const sequelize = new Sequelize('projetopreaula', 'root', '@Bk_010354', {
    host: "localhost",
    dialect: 'mysql',
    query:{raw:true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}