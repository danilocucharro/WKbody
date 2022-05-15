const db = require('./db')

const CadastroUsuario = db.sequelize.define('usuarios', {

    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },

    nome: {
        type: db.Sequelize.STRING
    },

    email: {
        type: db.Sequelize.STRING
    },

    senha: {
        type: db.Sequelize.STRING
    },
})


module.exports = CadastroUsuario