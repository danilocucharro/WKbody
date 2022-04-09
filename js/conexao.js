const Sequelize = require('sequelize');
const sequelize = new Sequelize('projetopreaula', 'root', '@Bk_010354', {
    host: "localhost",
    dialect: 'mysql'
})

//VERIFICAR SE A CONEXAO FOI REALIZADA
sequelize.authenticate().then(function(){
    console.log("CONEXÃO ESTABELECIDA")
}).catch(function(erro){
    console.log("FALHA AO SE CONECTAR" + erro)
})