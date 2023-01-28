const Ingresos = require('../models/ingresos.models')
const uuid = require('uuid')

const getAllIngresos = async () => {
    const data = await Ingresos.findAll()
    return data
}

const getIngresoById = async (id) => {
    const data = await Ingresos.findOne({
        where: {
            id
        }
    })
    return data
}

const createIngreso = async (data) => {
    const newEgreso = Ingresos.create({
        id: uuid.v4(),
        tipoEgresoId: data.tipoEgresoId,
        userId: data.userId,
        title: data.name,
        description: data.description,
        monto: data.monto,
        fecha: data.fecha
    })
    return newEgreso
}

const updateIngreso = async (id, data) => {
    const result = await Ingresos.update(data, {
        where : {
            id
        }
    })
    return result
}

const deleteIngreso = async (id) => {
    const data = await Ingresos.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    getAllIngresos,
    getIngresoById,
    createIngreso,
    updateIngreso,
    deleteIngreso
}

