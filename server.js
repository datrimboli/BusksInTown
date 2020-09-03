const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// bring in handlebars and change the extension to .hbs
app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use(require('./routes'))




require('./db').sync({force: true})
// require('./db').sync()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))