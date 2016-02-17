var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var db = require('./db.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: true }))

var routes = require('./routes.js')(app, db)

var server = app.listen(3000, function() {
    console.log('Listening on the port %s...', server.address().port)
})
