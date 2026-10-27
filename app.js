const express = require('express');
const cors = require('cors')
const app = express() //express is assigned to app
const fruits = require('./routes/fruitRoutes')

app.use(cors())
app.use(express.json())
app.use('/fruits', fruits)

app.get('/', (req, res) => {
  res.send('Hello fruity!')
})

module.exports = app
