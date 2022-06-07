const db = require('./db')

const TreinoFuncional = db.sequelize.define('funcionals', {

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
        type: db.Sequelize.STRING
    }
})


module.exports = TreinoFuncional