const db = require('../utils/database')
const {DataTypes} = require('sequelize')
const TipoIngreso = require('./tipoIngreso.models')
const Users = require('./users.models')

const Ingresos = db.define('ingresos', {
    id : {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    tipoIngresoId : {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'tipo_ingreso_id',
        references: {
            key: 'id',
            model: TipoIngreso
        }
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            key: 'id',
            model: Users
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    monto: {
        type:DataTypes.FLOAT,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }    
})

module.exports = Ingresos