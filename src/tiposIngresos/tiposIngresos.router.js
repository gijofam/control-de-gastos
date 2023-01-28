const router = require('express').Router()
const tipoIngresoService = require('./tiposIngresos.services')

router.route('/')
    .get(tipoIngresoService.getAllTiposEgresos)
    .post(tipoIngresoService.postTipoEgreso)

router.route('/:tipo_egreso_id')
    .patch(tipoIngresoService.updateTipoEgreso)
    .get(tipoIngresoService.getTipoEgresoById)
    .delete(tipoIngresoService.deleteTipoEgreso)

module.exports= router