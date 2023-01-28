const uuid = require('uuid')

const TiposIngresos = require('../models/tipoIngreso.models')


const getTiposEgresosAll = async () => {
    const data = await TiposIngresos.findAll()
    return data     
} 

const getTipoEgresoById = async(id) => {
    const data = await TiposIngresos.findOne({
        where : {
            id
        }
    })
    return data
}

const createTipoEgreso = async (data) => {
    const newTipoEgreso = await TiposIngresos.create({
        id: uuid.v4(),
        name: data.name,
        description: data.description
    })
    return newTipoEgreso
}

const updateTipoEgreso = async (id, data) => {
    const result = await TiposIngresos.update(data, {
        where: {
            id
        }
    })
    return result
}

const deleteUser = async (id) => {
    const data = await TiposIngresos.destroy({
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
