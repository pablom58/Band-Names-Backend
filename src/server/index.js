const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'../build')))
app.use(cors())

module.exports = app