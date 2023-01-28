const uuid = require('uuid')

const TiposEgresos = require('../models/tipoEgreso.models')


const getTiposEgresosAll = async () => {
    const data = await TiposEgresos.findAll()
    return data     
} 

const getTipoEgresoById = async(id) => {
    const data = await TiposEgresos.findOne({
        where : {
            id
        }
    })
    return data
}

const createTipoEgreso = async (data) => {
    const newTipoEgreso = await TiposEgresos.create({
        id: uuid.v4(),
        name: data.name,
        description: data.description
    })
    return newTipoEgreso
}

const updateTipoEgreso = async (id, data) => {
    const result = await TiposEgresos.update(data, {
        where: {
            id
        }
    })
    return result
}

const deleteUser = async (id) => {
    const data = await TiposEgresos.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    getTiposEgresosAll,
    getTipoEgresoById,
    createTipoEgreso,
    updateTipoEgreso,
    deleteUser
}
