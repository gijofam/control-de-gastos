const ingresosControllers = require('./ingresos.controllers')

const getAllIngresos = (req, res) => {
    egresosControllers.getAllEgresos()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({mesage : err.message})
        })
}

const getByIdIngresos = (req, res) => {
    const id = req.params.egreso_id
    egresosControllers.getEgresoById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(404).json({message : err.message})
        })
}

const postIngresos = (req, res) => {
    
    const {title, description, fecha, tipoEgresoId, monto} = req.body
    const userId = req.user.id
    if(title && description && fecha && monto && tipoEgresoId ){
        egresosControllers.createEgreso({title, description, fecha,tipoEgresoId,monto, userId})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.mesage})
            })

    }else{
        res.status(400).json({
            message: 'Missing data',
            fields: {
                title: 'string',
                description: 'string',
                fecha: 'date',
                monto: 'int'
            }
        })
    }
}

const updateIngresos = (req, res) => {
    const idEgreso = req.params.egreso_id
    const {title, description, fecha, tipoEgresoId} = req.body
    if(title && description && fecha && tipoEgresoId){
        egresosControllers.updateEgreso(idEgreso, {title, description, fecha, tipoEgresoId})
            .then(data => {
                if(data[0]){
                res.status(200).json({message: `egreso con ID ${idEgreso} edited succefully`})}
                else{
                   res.status(404).json({message: 'Invalid ID'}) 
                }
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    }else{
        res.status(400).json({
            message: 'Missing data',
            fields: {
                title: 'string',
                description: 'string',
                fecha: 'date'
            }
        })
    }
}

const deleteIngresos = (req,res) => {
    const idEgreso = req.params;
    egresosControllers.deleteEgreso(idEgreso)
        .then(data => {
            if(data)
                res.status(204).json()
            else
                res.status(404).json({message: 'Invalid ID'})
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllIngresos,
    getByIdIngresos,
    postIngresos,
    updateIngresos,
    deleteIngresos
}