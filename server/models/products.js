const db = require('../db.js')
const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    createAt: {
        type: Date, default: Date.now
    },
    updatedAt: Date
})

module.exports = mongoose.model('Product', ProductSchema)
