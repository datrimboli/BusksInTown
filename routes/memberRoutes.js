const router = require('express').Router()
const { Member } = require('../models')

router.get('/members', (req, res) => {
  Member.findAll()
    .then(member => res.json(member))
    .catch(err => console.log(err))
})
// router.get('/members/:id', (req, res) => {
//     Member.findOne({ where: { id: req.params.id }, include: [Artist] })
//         .then(member => res.json(member))
//         .catch(err => console.log(err))
// })

router.post('/members', (req, res) => {
    Member.create(req.body)
        .then(member => res.json(member))
        .catch(err => console.log(err))
})
// router.put('/members/:id', (req, res) => {
//     Member.update(req.body, { where: { id: req.params.id } })
//         .then(() => res.sendStatus(200))
//         .catch(err => console.log(err))
// })

// router.delete('/members/:id', (req, res) => {
//     Member.destroy({ where: { id: req.params.id } })
//         .then(() => res.sendStatus(200))
//         .catch(err => console.log(err))
// })
module.exports = router