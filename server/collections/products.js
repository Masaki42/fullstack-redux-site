const db = require('../db.js')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
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

const Product = mongoose.model('Product', ProductSchema)

const generateController = Model => ({
    index(req, res) {
        return Model.find((err, docs) => {
            if (err) {
                res.statusCode = 500
                console.error('Internal error(%d): %s', res.statusCode, err.message)
                return res.send({ error: 'Server error' })
            }
            return res.send({ data: {...docs} })
        })
    },
    show(req, res) {
        return Model.findById(req.params.id, (err, doc) => {
            if (!doc) {
                res.statusCode = 404
                return res.send({ error: 'Not found' })
            }
            if (err) {
                res.statusCode = 500
                console.error('Internal error(%d): %s', res.statusCode, err.message)
                return res.send({ error: 'Server error' })
            }
            return res.send({ status: 'OK', data: {doc} })
        })
    },
    create(req, res) {
        const doc = new Model({
            ...req.body,
            createAt: Date.now()
        })
        doc.save(err => {
            if (err) {
                if (err.name === 'ValidationError') {
                    res.statusCode = 400
                    return res.send({ error: 'Validation error' })
                }
                res.statusCode = 500
                console.error('Internal error(%d): %s', res.statusCode, err.message)
                return res.send({ error: 'Server error' })
            }
            return res.send({ status: 'OK', data: {doc} })
        })
    },
    update(req, res) {
        Model.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
                updatedAt: Date.now()
            },
            (err, doc) => {
                if (!doc) {
                    res.statusCode = 404
                    return res.send({ error: 'Not found' })
                }
                if (err) {
                    if (err.name === 'ValidationError') {
                        res.statusCode = 400
                        return res.send({ error: 'Validation error' })
                    }
                    res.statusCode = 500
                    console.error('Internal error(%d): %s', res.statusCode, err.message)
                    return res.send({ error: 'Server error' })
                }
                return res.send({ status: 'OK' })
        })
    },
    destroy(req, res) {
        return Model.findById(req.params.id, (err, doc) => {
            if (!doc) {
                res.statusCode = 404
                return res.send({ error: 'Not found' })
            }

            return doc.remove(err => {
                if (err) {
                    res.statusCode = 500
                    console.error('Internal error(%d): %s', res.statusCode, err.message)
                    return res.send({ error: 'Server error' })
                }
                return res.send({ status: 'OK' })
            })
        })
    }
})

const ProductsCollection = generateController(Product)


module.exports = ProductsCollection
