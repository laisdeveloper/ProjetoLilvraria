const { DataTypes } = require('sequelize')
const sequilize = require('../config/database')

const Livro = sequilize.define('Livro', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Livro