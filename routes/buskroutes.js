const router = require('express').Router()
const { Busk } = require('../models')

router.get('/busks', (req, res) => {
  Busk.findAll()
    .then(busks => res.json(busks))
    .catch(err => console.log(err))
})
// router.get('/busks/:id', (req, res) => {
//     Busk.findOne({ where: { id: req.params.id }, include: [Artist] })
//         .then(artist => res.json(artist))
//         .catch(err => console.log(err))
// })

router.post('/busks', (req, res) => {
    Busk.create(req.body)
        .then(busk => res.json(busk))
        .catch(err => console.log(err))
})
// router.put('/busks/:id', (req, res) => {
//     Busk.update(req.body, { where: { id: req.params.id } })
//         .then(() => res.sendStatus(200))
//         .catch(err => console.log(err))
// })

// router.delete('/busks/:id', (req, res) => {
//     Busk.destroy({ where: { id: req.params.id } })
//         .then(() => res.sendStatus(200))
//         .catch(err => console.log(err))
// })

module.exports = router