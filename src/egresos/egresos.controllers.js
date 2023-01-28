const Egreso = require('../models/egresos.models')
const uuid = require('uuid')

const getAllEgresos = async () => {
    const data = await Egreso.findAll()
    return data
}

const getEgresoById = async (id) => {
    const data = await Egreso.findOne({
        where: {
            id
        }
    })
    return data
}

const createEgreso = async (data) => {
    const newEgreso = Egreso.create({
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

const updateEgreso = async (id, data) => {
    const result = await Egreso.update(data, {
        where : {
            id
        }
    })
    return result
}

const deleteEgreso = async (id) => {
    const data = await Egreso.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    getAllEgresos,
    getEgresoById,
    createEgreso,
    updateEgreso,
    deleteEgreso
}

