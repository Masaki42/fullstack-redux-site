const config = require('config')
const mongoose = require('mongoose')
mongoose.connect(config.get('db.url'))

const db = mongoose.connection

db.once('open', () => {
    console.warn('database connected')
})

db.on('error', err => {
    console.warn('database error', err)
})

module.exports = db
