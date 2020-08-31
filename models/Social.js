const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Social extends Model { }

Social.init({
    spotify: {
        type: DataTypes.STRING,
        allowNull: true
    },
    twitter: {
        type: DataTypes.STRING,
        allowNull: true
    },
    instagram: {
        type: DataTypes.STRING,
        allowNull: true
    },
    soundcloud: {
        type: DataTypes.STRING,
        allowNull: true
    },
    youtube: {
        type: DataTypes.STRING,
        allowNull: true
    },
    facebook: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, { sequelize, modelName: 'socials' })

module.exports = Social