USE busk_db;
INSERT INTO artists (name, genre, image_url)
VALUES ('The Unsung', 'Metal', 'https://i.imgur.com/k84Vf91.jpg');

-- Use this on postman:
-- artists

const db = require('./models')
db.Artist.bulkCreate([
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
    genre: "Chill Indie" ,
    bio: `Is cool guy`,
    image_url: "https://i.imgur.com/dMT2yG7.jpg",
    
},
])

busks

const db = require('./models')
db.Busk.bulkCreate([
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
    date: "2020-10-31" ,
    location: "504 Fake St",
   start: "14:00:00",
    end: "17:00:00",
    artistId: 2
},

{
    date: "2021-02-17" ,
    location: "UCI Parking Structure",
   start: "20:00:00",
    end: "23:59:00",
    artistId: 3
},

{
    date: "2020-12-15",
    location: "88 Rising Ave" ,
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

socials

const db = require('./models')
db.Social.bulkCreate([
{
    spotify: "https://open.spotify.com/artist/27Wo1BSPyBtuVmBg7jYkNm?si=C-KN9cWMRj6em7YMVo_5Hw",
    instagram: "https://www.instagram.com/theunsungmusic/",
    soundcloud: "https://soundcloud.com/dcrocker21",
    youtube: "https://www.youtube.com/watch?v=FG6tzKaOlCI" ,
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


-- Run this in server.js
-- const db = require('./models')
-- db.Artist.bulkCreate([
-- {
--     name: "The Unsung",
--     genre: "Metal",
--     bio: "Devin eats reeses",
--     image_url: "https://i.imgur.com/k84Vf91.jpg"  
-- },
-- {
--     name: "Off Road Minivan",8
--     genre: "Alternative Rock",
--     bio: "Dave is the coolest guy",
--     image_url: "https://imgur.com/a/iHDkhUZ"
-- },
-- {
--     name: "Eric's Lobster House",
--     genre: "Hot n Spicy",
--     bio: "Get swoll",
--     image_url: "image"
-- },
-- {
--     name: "Kenny's Lawnchair",
--     genre: "Grass",
--     bio: "I eat ice cereal",
--     image_url: "kennyiscute"
-- },
-- {
--     name: "Calum's Backyard",
--     genre: "Diet Coke",
--     bio: "Has socks",
--     image_url: "calumstockimage"
-- }
-- ])

-- -- Be sure to add artists before adding Busks
-- const db = require('./models')
-- db.Busk.bulkCreate([
--     {
--         date: "2020-09-02",
--         location: "123 Main St",
--         start: "18:00:00",
--         end: "19:00:00",
--         artistId: 1
--     },
--     {
--         date: "2020-09-03",
--         location: "222 Temple St",
--         start: "15:00:00",
--         end: "16:00:00",
--         artistId: 2
--     },
--     {
--         date: "2020-09-06",
--         location: "3 Rainy Rd",
--         start: "09:00:00",
--         end: "10:00:00",
--         artistId: 3
--     },
--     {
--         date: "2020-09-06",
--         location: "3 Rainy Rd",
--         start: "15:00:00",
--         end: "16:00:00",
--         artistId: 5
--     },
--     {
--         date: "2020-09-05",
--         location: "40 Fore Error Cir",
--         start: "12:00:00",
--         end: "13:00:00",
--         artistId: 5
--     },
-- ])
