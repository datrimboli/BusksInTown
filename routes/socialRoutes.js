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
router.post('socials/seed', (req, res) => {
  Social.bulkCreate([
    {
      spotify: "https://open.spotify.com/artist/27Wo1BSPyBtuVmBg7jYkNm?si=C-KN9cWMRj6em7YMVo_5Hw",
      instagram: "https://www.instagram.com/theunsungmusic/",
      soundcloud: "https://soundcloud.com/dcrocker21",
      youtube: "https://www.youtube.com/watch?v=FG6tzKaOlCI",
      facebook: "https://www.facebook.com/TheUnsungOfficial/",
      artistId: 1
    },

    {
      spotify: "https://open.spotify.com/artist/21JxgGAXZjSjBg9JRgIo9q",
      instagram: "https://www.instagram.com/offroadminivan/",
      soundcloud: "https://soundcloud.com/tooth-and-nail-records/off-road-minivan-spiral-gaze",
      facebook: "https://www.facebook.com/OffRoadMinivan/",
      artistId: 2
    },

    {
      spotify: "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5?si=pbccdsEkRMSnBsTy65S9mw",
      twitter: "https://twitter.com/chilipeppers?lang=en",
      instagram: "https://www.instagram.com/chilipeppers/?hl=en",
      soundcloud: "https://soundcloud.com/red-hot-chili-peppers-official",
      youtube: "https://www.youtube.com/user/RHCPtv",
      facebook: "https://www.facebook.com/ChiliPeppers/",
      artistId: 3
    },

    {
      spotify: "https://open.spotify.com/artist/2kxP07DLgs4xlWz8YHlvfh",
      twitter: "https://twitter.com/nikizefanya",
      instagram: "https://www.instagram.com/nikizefanya/?hl=en",
      soundcloud: "https://soundcloud.com/niki-sc",
      youtube: "https://www.youtube.com/channel/UCaAWRu53UW815hGTmxvHFbA",
      facebook: "https://www.facebook.com/NIKIZefanya/",
      artistId: 4
    },

    {
      twitter: "https://twitter.com/calumragan56",
      instagram: "https://www.instagram.com/calumragan45/",
      artistId: 5
    },
  ])
})
module.exports = router