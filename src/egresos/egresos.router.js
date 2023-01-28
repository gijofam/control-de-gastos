const egresosServices = require('./egresos.services')
const router = require('express').Router()
const passport = require('passport')
router.route('/')
    .get(passport.authenticate('jwt', {session: false}), egresosServices.getAllEgresos)
    .post(passport.authenticate('jwt', {session: false}), egresosServices.postEgreso)

router.route('/:egreso_id')
    .get(passport.authenticate('jwt', {session:  false}), egresosServices.getByIdEgreso)
    .patch(passport.authenticate('jwt', {session: false}), egresosServices.updateEgreso)
    .delete(passport.authenticate('jwt', {session: false}), egresosServices.deleteEgreso)

module.exports = router




