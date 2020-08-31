const router = require('express').Router()
// const { Artist, Busk, Member, Social } = require('../models/index')


router.get('/', (req, res) => {
  res.render('index')
})



module.exports = router
