const router = require('express').Router()

// router.use('/api', require('./burgers_controller.js'))
router.use('/', require('./viewRoutes.js'))
router.use('/api', require('./artistRoutes.js'))
router.use('/api', require('./buskroutes.js'))
router.use('/api', require('./socialRoutes.js'))
console.log("hi")
module.exports = router
