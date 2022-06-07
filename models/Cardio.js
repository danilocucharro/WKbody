const db = require('./db')

const TreinoCardio = db.sequelize.define('cardios', {

    idExercicio: {
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },

    nomeExercicio: {
        type: db.Sequelize.STRING
    },

    resultados: {
        type: db.Sequelize.STRING
    },

    info: {
        type: db.Sequelize.STRING
    },

    fotoExercicio: {
        type: db.Sequelize.BLOB
    }
})


module.exports = TreinoCardio