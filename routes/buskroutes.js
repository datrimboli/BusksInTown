const router = require('express').Router()
const { Busk, Artist } = require('../models')

router.get('/busks', (req, res) => {
  Busk.findAll({ include: [Artist] })
    .then(busks => res.json(busks))
    .catch(err => console.log(err))
})
router.get('/busks/:id', (req, res) => {
    Busk.findOne({ where: { id: req.params.id }, include: [Artist] })
        .then(artist => res.json(artist))
        .catch(err => console.log(err))
})

router.post('/busks', (req, res) => {
    Busk.create(req.body)
        .then(busk => res.json(busk))
        .catch(err => console.log(err))
})

router.put('/busks/:id', (req, res) => {
    Busk.update(req.body, { where: { id: req.params.id } })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
})

router.delete('/busks/:id', (req, res) => {
    Busk.destroy({ where: { id: req.params.id } })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
})
router.post('/busks/seed', (req, res) => {
  Busk.bulkCreate([
    {
      date: "2020-09-18",
      location: "123 Main St",
      start: "12:00:00",
      end: "14:00:00",
      artistId: 1
    },

    {
      date: "2020-10-04",
      location: "Target Parking Lot off McKinley",
      start: "10:00:00",
      end: "12:30:00",
      artistId: 1
    },

    {
      date: "2020-09-30",
      location: "9000 Over Blvd",
      start: "08:00:00",
      end: "12:00:00",
      artistId: 2
    },

    {
      date: "2020-11-15",
      location: "Calum's Backyard",
      start: "15:00:00",
      end: "17:00:00",
      artistId: 5
    },

    {
      date: "2020-10-31",
      location: "504 Fake St",
      start: "14:00:00",
      end: "17:00:00",
      artistId: 2
    },

    {
      date: "2021-02-17",
      location: "UCI Parking Structure",
      start: "20:00:00",
      end: "23:59:00",
      artistId: 3
    },

    {
      date: "2020-12-15",
      location: "88 Rising Ave",
      start: "21:00:00",
      end: "22:30:00",
      artistId: 4
    },

    {
      date: "2020-12-25",
      location: "UTC",
      start: "12:00:00",
      end: "03:00:00",
      artistId: 1
    },
  ])
})


module.exports = router