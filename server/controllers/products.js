const db = require('../db.js')
const Schema = require('mongoose').Schema

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


// const ObjectId = require('mongojs').ObjectId

// show, index, new, create, update, destroy
// const productsController = {
//     index(req, res) {
//         return db.products.find({}, (err, products) => {
//             if (err) {
//                 res.statusCode = 500
//                 console.error('Internal error(%d): %s', res.statusCode, err.message)
//                 return res.send({error: 'Server error'})
//             }
//             return res.send(products)
//         })
//     },
//     show(req, res) {
//         return db.products.findOne({'_id': ObjectId(req.params.id)}, (err, product) => {
//             if (!product) {
//                 res.statusCode = 404
//                 return res.send({error: 'Not found'})
//             }
//             if (err) {
//                 res.statusCode = 500
//                 console.error('Internal error(%d): %s', res.statusCode, err.message)
//                 return res.send({error: 'Server error'})
//             }
//             return res.send({status: 'OK', product})
//         })
//     },
//     create(req, res) {
//         const newProduct = {
//             title: req.body.title,
//             description: req.body.description,
//             createAt: Date.now()
//         }
//         return db.products.insert(newProduct, (err, product) => {
//             if (err) {
//                 res.statusCode = 500
//                 console.error('Internal error(%d): %s', res.statusCode, err.message)
//                 return res.send({error: 'Server error'})
//             }
//             return res.send({status: 'OK', product})
//         })
//     },
//     update(req, res) {
//         db.products.findOne({'_id': ObjectId(req.params.id)}, (err, product) => {
//             if (!product) {
//                 res.statusCode = 404
//                 return res.send({ error: 'Not found' })
//             }
//
//             product.title = req.body.title
//             product.description = req.body.description
//
//             return product.save(err => {
//                 if (err) {
//                     if (err.name == 'ValidationError') {
//                         res.statusCode = 400
//                         res.send({ error: 'Validation error' })
//                     } else {
//                         res.statusCode = 500
//                         res.send({ error: 'Server error' })
//                     }
//                     log.error('Internal error(%d): %s',res.statusCode,err.message)
//                 }
//                 return res.send({ status: 'OK', product:product })
//             })
//         })
//         //
//         // const _id = ObjectId(req.params.id)
//         // db.products.findAndModify({
//         //     query: {_id},
//         //     update: { $set: req.body},
//         //     new: true
//         // }, function (err, doc, lastErrorObject) {
//         //     if (err) {
//         //         res.statusCode = 500
//         //         console.error('Internal error(%d): %s', res.statusCode, err.message)
//         //         return res.send({error: 'Server error'})
//         //     }
//         //     return res.send({status: 'OK', product: req.body})
//         // })
//     },
//     destroy() {
//
//     }
// }


module.exports = productsController
