const db = require('./db')

const TreinoHiit = db.sequelize.define('hiits', {

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
})


module.exports = TreinoHiit