const db = require('../utils/database')
const {DataTypes} = require('sequelize')
const TipoEgreso = require('./tipoEgreso.models')

const Egresos = db.define('ingresos', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    tipoEgresoId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'tipo_Egreso_id',
        references: {
            key: 'id',
            model: TipoEgreso
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
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    monto: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
})

module.exports = Egresos