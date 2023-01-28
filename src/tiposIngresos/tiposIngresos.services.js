const TiposIngresosControllers = require('./tiposIngresos.controllers')

const getAllTiposEgresos = (req, res) => {
    TiposIngresosControllers.getTiposEgresosAll()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const getTipoEgresoById = (req, res) => {
    const id = req.params.tipo_egreso_id;
    TiposIngresosControllers.getTipoEgresoById(id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(404).json({message: err.message})
        })
}

const postTipoEgreso = (req, res) => {
    const {name, description} = req.body
    if(name && description) {
        TiposIngresosControllers.createTipoEgreso({name, description})
            .then( data => {
                res.status(200).json(data)
            })
            .catch( err => {
                res.status(400).json({message: err.message})
            })
    } else{
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                name: 'string',
                description: 'string'
            }
        })
    }
}

const updateTipoEgreso = (req, res) => {
    const idTipoEgreso = req.params.tipo_egreso_id
    const {name, description} = req.body

    if(name && description){
        TiposIngresosControllers.updateTipoEgreso(idTipoEgreso, {name, description})
            .then(data => {
                if(data[0])
                    res.status(200).json({message: `tipo egreso con ID: ${idTipoEgreso}, edited succesfully`})
                else
                    res.status(404).json({ message: 'Invalid ID'})
            }) 
            .catch((err) => {
                res.status(400).json({ message: err.message })
            })
    }else{
        res.status(404).json({
            message: 'Missing Data',
            fields: {
                name: 'string',
                description: 'string'
            }
        })
    }
}

const deleteTipoEgreso = (req, res) => {
    const id = req.params.tipo_egreso_id;
    TiposIngresosControllers.deleteTipoEgreso(id)
        .then((data) => {
            if(data)
                res.status(204).json()
            else
                res.status(404).json({ message: 'Invalid ID'})
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllTiposEgresos,
    getTipoEgresoById,
    postTipoEgreso,
    updateTipoEgreso,
    deleteTipoEgreso
}



