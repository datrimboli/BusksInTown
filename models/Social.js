const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Social extends Model { }

Social.init({
    spotify: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'None Available'
    },
    twitter: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'None Available'
    },
    instagram: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'None Available'
    },
    soundcloud: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'None Available'
    },
    youtube: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'None Available'
    },
    facebook: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'None Available'
    },
}, { sequelize, modelName: 'socials' })

module.exports = Social