const ProductsCollection = require('./collections/products')

// show, index, create, update, destroy
const apiRouter = app => {
    app.get('/api/products', ProductsCollection.index)
    app.get('/api/products/:id', ProductsCollection.show)
    app.post('/api/products', ProductsCollection.create)
    app.put('/api/products/:id', ProductsCollection.update)
    app.delete('/api/products/:id', ProductsCollection.destroy)
}

module.exports = apiRouter
