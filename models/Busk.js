const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Busk extends Model { }

Busk.init({
    date: {
        type: DataTypes.DATEONLY,  //DATEONLY passed like 'YYYY-MM-DD' EX: INSERT INTO busks VALUES (date, location, etc) ('2020-08-30' other values, etc) use moment.js with this so we can track past events and stuff. -Makoto's idea
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    start: {
        type: DataTypes.TIME,  // this is formatted as hh:mm:ss but we can store it as another datatype
        allowNull: false
    },
    end: {
        type: DataTypes.TIME,
        allowNull: false
    },
    counter: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    } 
},  { sequelize, modelName: 'busks' })

module.exports = Busk