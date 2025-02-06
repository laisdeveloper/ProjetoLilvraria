const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './databaseError.sqlite'
})

module.exports = sequelize