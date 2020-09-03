const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Social extends Model { }

Social.init({
    spotify: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: 'None Available'
    },
    twitter: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: 'None Available'
    },
    instagram: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: 'None Available'
    },
    soundcloud: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: 'None Available'
    },
    youtube: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: 'None Available'
    },
    facebook: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: 'None Available'
    },
}, { sequelize, modelName: 'socials' })

module.exports = Social