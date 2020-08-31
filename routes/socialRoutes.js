const router = require('express').Router()
const { Social } = require('../models')

router.get('/socials', (req, res) => {
  Social.findAll()
    .then(socials => res.json(socials))
    .catch(err => console.log(err))
})
router.get('/socials/:id', (req, res) => {
    Social.findOne({ where: { id: req.params.id }, include: [Artist] })
        .then(social => res.json(social))
        .catch(err => console.log(err))
})

router.post('/socials', (req, res) => {
    Social.create(req.body)
        .then(social => res.json(social))
        .catch(err => console.log(err))
})
router.put('/socials/:id', (req, res) => {
    Social.update(req.body, { where: { id: req.params.id } })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
})

router.delete('/socials/:id', (req, res) => {
    Social.destroy({ where: { id: req.params.id } })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
})
module.exports = router