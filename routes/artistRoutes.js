const router = require('express').Router()
const { Artist, Busk, Social } = require('../models')

router.get('/artists', (req, res) => {
  Artist.findAll({ include: [Busk, Social] })
    .then(artists => res.json(artists))
    .catch(err => console.log(err))
})

router.get('/artists/:id', (req, res) => {
    Artist.findOne({ where: { id: req.params.id }, include: [Busk, Social] })
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
router.post('/artists/seed', (req,res)=> {
  Artist.bulkCreate([
    {
      name: "The Unsung",
      genre: "Metal",
      bio: `The Unsung was formed in 2015 and since then has taken over the Southern California Metal Scene.  By combining unparalleled high energy live shows with a sonically beautiful and truly unique sound, The Unsung delivers an earth shattering experience to any listener.  The Unsung Has released two EP’s, “Rise” and “Sin Cera”.  The band has performed alongside bands such as We Came as Romans, Miss May I, The Word Alive, Secrets, Ice Nine Kills, Rest Repose, Polyphia, Jason Richardson, Silent Planet, Dead Rabbits, Dayshell, and many more.`,
      image_url: "https://i.imgur.com/k84Vf91.jpg"
    },

    {
      name: "Off Road Minivan",
      genre: "Alternative Rock",
      bio: `5 piece Alt rock band from upstate NY signed to Tooth&Nail Records. Debut full length album “Swan Dive” released May 15 2020.`,
      image_url: "https://i.imgur.com/RMm3Qoh.jpg"
    },

    {
      name: "Red Hot Chili Peppers",
      genre: "Rock",
      bio: `Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1983. Their music incorporates elements of alternative rock, funk, punk rock and psychedelic rock. The band consists of vocalist Anthony Kiedis, guitarist John Frusciante, bassist Flea, and drummer Chad Smith.`,
      image_url: "https://i.imgur.com/Uwn9myz.jpg"
    },

    {
      name: "Niki",
      genre: "R&B",
      bio: `Nicole Zefanya, known professionally as NIKI, is an Indonesian singer, songwriter, and record producer.`,
      image_url: "https://i.imgur.com/VOr02F1.jpg",

    },

    {
      name: "Calum's Socks",
      genre: "Chill Indie",
      bio: `Is cool guy`,
      image_url: "https://i.imgur.com/dMT2yG7.jpg",

    },
  ])
})
module.exports = router