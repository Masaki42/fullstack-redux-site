require('babel-register')({
    presets: ['es2015'],
    plugins: ['syntax-object-rest-spread', 'transform-object-rest-spread']
})

const bodyParser = require('body-parser')
const config = require('config')
const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const routes = require('./routes.js')(app)

const server = app.listen(config.get('port'), function() {
    console.log('Listening on the port %s...', config.get('port'))
})
