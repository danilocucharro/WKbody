const Sequelize = require('sequelize')

// Conexao com o Banco de dados
const sequelize = new Sequelize('BD_WKbody', 'root', 'Bk_010354', {
    host: "wkbody-bd.cnnlvrvgqbrq.sa-east-1.rds.amazonaws.com",
    dialect: 'mysql',
    query:{raw:true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}