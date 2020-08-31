const Artist = require('./Artist.js')
const Busk = require('./Busk.js')
const Member = require('./Member.js')
const Social = require('./Social.js')

Artist.hasMany(Busk)
Artist.hasOne(Member)
Artist.hasOne(Social)

Busk.belongsTo(Artist)
Member.belongsTo(Artist)
Social.belongsTo(Artist)

module.exports = { Artist, Busk, Member, Social }