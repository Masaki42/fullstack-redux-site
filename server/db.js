var databaseUrl = 'sample-blog' // "username:password@example.com/mydb"
var collections = ['posts', 'users']

var db = require("mongojs").connect(databaseUrl, collections)

db.on('connect', function() {
    console.warn('database connected')
})

db.on('error', function(err) {
    console.warn('database error', err)
})

module.exports = db
