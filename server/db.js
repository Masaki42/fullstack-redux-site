// const databaseUrl = 'rezruss-dev' // "username:password@example.com/mydb"
// const collections = ['products', 'users']
//
// const db = require("mongojs")(databaseUrl, collections)
//
// db.on('connect', () => {
//     console.warn('database connected')
// })
//
// db.on('error', err => {
//     console.warn('database error', err)
// })
//
// module.exports = db

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/rezruss-dev')

const db = mongoose.connection

db.once('open', () => {
    console.warn('database connected')
})

db.on('error', err => {
    console.warn('database error', err)
})

module.exports = db
