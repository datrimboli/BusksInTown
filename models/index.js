const Artist = require('./Artist.js')
const Busk = require('./Busk.js')
const Social = require('./Social.js')

Artist.hasMany(Busk)
Artist.hasOne(Social)

Busk.belongsTo(Artist)
Social.belongsTo(Artist)//check tomorrow if this is right

module.exports = { Artist, Busk, Social }