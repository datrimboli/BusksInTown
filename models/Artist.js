const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Artist extends Model { }
Artist.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image_url: {   //artists can add image url and we'll be able to render it onto an html page using img tags. For this project we can just use imgur links. 
      type: DataTypes.STRING, 
      allowNull: true //we can set up a default photo if artists do not upload an image 
    }, 
    pin: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: 9000
    }
  }, { sequelize, modelName: 'artists' })

module.exports = Artist