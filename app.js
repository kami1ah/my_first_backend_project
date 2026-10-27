const express = require('express');
const app = express() //express is assigned to app
const fruits = require('./routes/fruitRoutes')

app.use(express.json())
app.use('/fruits', fruits)

app.get('/', (req, res) => {
  res.send('Hello fruity!')
})

module.exports = app
