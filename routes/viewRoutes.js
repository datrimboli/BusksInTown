const router = require('express').Router()
const { Artist, Busk, Social } = require('../models/index')


router.get('/artists/:id', (req, res) => {
  // let artist = await Artist.findOne({ where: { id: req.params.id }, include: [Busk, Member, Social] })
  res.render('artist', { id: req.params.id })
})

router.get('/', (req, res) => {
  res.render('index')
})



module.exports = router
