USE busk_db;
INSERT INTO artists (name, genre, image_url)
VALUES ('The Unsung', 'Metal', 'https://i.imgur.com/k84Vf91.jpg');

-- Use this on postman:
artists
{
    "name": "The Unsung",
    "genre": "Metal",
    "image_url": "https://i.imgur.com/k84Vf91.jpg"  
},
{
    "name": "Off Road Minivan",
    "genre": "Alternative Rock",
    "image_url": "https://imgur.com/a/iHDkhUZ"
}


busks
{
    "date": ,
    "location": ,
    "start": ,
    "end": ,
<<<<<<< HEAD
<<<<<<< HEAD
    "counter": 
=======
    "counter:" 
>>>>>>> b83ed388876039c9dd0b100400293c149759967e
=======
    "counter:" 
>>>>>>> 79fff9343b9162bb8d7ff16d98d40d277fcaeb3e
}


socials
{
    "spotify": ,
    "twitter": ,
    "instagram": ,
    "soundcloud": ,
    "youtube": ,
    "facebook":
}


members
{
    "member1": ,
    "member1role": ,
    "member2": ,
    "member2role": ,
    "member3": ,
    "member3role": ,
    "member4": ,
    "member4role": ,
    "member5": ,
    "member5role": 
}

-- Run this in server.js
const db = require('./models')
db.Artist.bulkCreate([
{
    name: "The Unsung",
    genre: "Metal",
    bio: "Devin eats reeses",
    image_url: "https://i.imgur.com/k84Vf91.jpg"  
},
{
    name: "Off Road Minivan",
    genre: "Alternative Rock",
    bio: "Dave is the coolest guy",
    image_url: "https://imgur.com/a/iHDkhUZ"
},
{
    name: "Eric's Lobster House",
    genre: "Hot n Spicy",
    bio: "Get swoll",
    image_url: "image"
},
{
    name: "Kenny's Lawnchair",
    genre: "Grass",
    bio: "I eat ice cereal",
    image_url: "kennyiscute"
},
{
    name: "Calum's Backyard",
    genre: "Diet Coke",
    bio: "Has socks",
    image_url: "calumstockimage"
}
])

-- Be sure to add artists before adding Busks
const db = require('./models')
db.Busk.bulkCreate([
    {
        date: "2020-09-02",
        location: "123 Main St",
        start: "18:00:00",
        end: "19:00:00",
        artistId: 1
    },
    {
        date: "2020-09-03",
        location: "222 Temple St",
        start: "15:00:00",
        end: "16:00:00",
        artistId: 2
    },
    {
        date: "2020-09-06",
        location: "3 Rainy Rd",
        start: "09:00:00",
        end: "10:00:00",
        artistId: 3
    },
    {
        date: "2020-09-06",
        location: "3 Rainy Rd",
        start: "15:00:00",
        end: "16:00:00",
        artistId: 5
    },
    {
        date: "2020-09-05",
        location: "40 Fore Error Cir",
        start: "12:00:00",
        end: "13:00:00",
        artistId: 5
    },
])
