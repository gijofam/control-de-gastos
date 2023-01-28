const router = require('express').Router()
const tipoEgresoService = require('./tiposEgresos.services')

router.route('/')
    .get(tipoEgresoService.getAllTiposEgresos)
    .post(tipoEgresoService.postTipoEgreso)

router.route('/:tipo_egreso_id')
    .patch(tipoEgresoService.updateTipoEgreso)
    .get(tipoEgresoService.getTipoEgresoById)
    .delete(tipoEgresoService.deleteTipoEgreso)

module.exports = router