const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Member extends Model { }

Member.init({
    member1: {
        type: DataTypes.STRING,  //messy but workaround to ensure all members aren't just saved into one string on the artist table. we can do that though if this doesn't work out.
        allowNull: true
    },
    member1role: {
        type: DataTypes.STRING, 
        allowNull: true 
    },
    member2: {
        type: DataTypes.STRING,
        allowNull: true  
    },
    member2role: {
        type: DataTypes.STRING,
        allowNull: true
    },
    member3: {
        type: DataTypes.STRING,
        allowNull: true
    },
    member3role: {
        type: DataTypes.STRING, 
        allowNull: true 
    },
    member4: {
        type: DataTypes.STRING,
        allowNull: true
    },
    member4role: {
        type: DataTypes.STRING,
        allowNull: true  
    },
    member5: {
        type: DataTypes.STRING,
        allowNull: true
    },
    member5role: {
        type: DataTypes.STRING, 
        allowNull: true 
    }
},  { sequelize, modelName: 'members' })

module.exports = Member