const Artist = require('./Artist.js')
const Busk = require('./Busk.js')
const Member = require('./Member.js')
const Social = require('./Social.js')

Busk.hasMany(Artist)
Member.hasOne(Artist)
Social.hasOne(Artist)

Artist.belongsTo(Busk)
Artist.belongsTo(Member)
Artist.belongsTo(Social) //check tomorrow if this is right

module.exports = { Artist, Busk, Member, Social }