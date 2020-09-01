const router = require('express').Router()

// router.use('/api', require('./burgers_controller.js'))
router.use('/', require('./viewRoutes.js'))
router.use('/api', require('./artistRoutes.js'))
router.use('/api', require('./buskRoutes.js'))
router.use('/api', require('./socialRoutes.js'))

module.exports = router
