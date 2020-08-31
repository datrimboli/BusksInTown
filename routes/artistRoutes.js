const router = require('express').Router()
const { Artist, Busk, Member, Social } = require('../models')

router.get('/artists', (req, res) => {
  Artist.findAll({ include: [Busk, Member, Social] })
    .then(artists => res.json(artists))
    .catch(err => console.log(err))
})

router.get('/artists/:id', (req, res) => {
    Artist.findOne({ where: { id: req.params.id }, include: [Drink] })
        .then(artist => res.json(artist))
        .catch(err => console.log(err))
})

router.post('/artists', (req, res) => {
    Artist.create(req.body)
        .then(artist => res.json(artist))
        .catch(err => console.log(err))
})
router.put('/artists/:id', (req, res) => {
    Artist.update(req.body, { where: { id: req.params.id } })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
})

router.delete('/artists/:id', (req, res) => {
    Artist.destroy({ where: { id: req.params.id } })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
})

module.exports = router