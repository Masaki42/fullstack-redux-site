require('babel-register')({ presets: ['es2015'] })

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const routes = require('./routes.js')(app)

const server = app.listen(3000, function() {
    console.log('Listening on the port %s...', server.address().port)
})
