const db = require('../utils/database')
const {DataTypes} = require('sequelize')

const TipoEgreso = db.define('tipo_egreso', {
    id: {
        type : DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

module.exports =  TipoEgreso