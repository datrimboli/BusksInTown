const Artist = require('./Artist.js')
const Busk = require('./Busk.js')
const Member = require('./Member.js')
const Social = require('./Social.js')

// Busk.hasMany(Artist)
// Member.hasOne(Artist)
// Social.hasOne(Artist)
Artist.hasMany(Busk)
Artist.hasOne(Member)
Artist.hasOne(Social)

Busk.belongsTo(Artist)
Member.belongsTo(Artist)
Social.belongsTo(Artist)

// Artist.belongsToMany(Busk)
// Artist.belongsTo(Member)
// Artist.belongsTo(Social) //check tomorrow if this is right

module.exports = { Artist, Busk, Member, Social }