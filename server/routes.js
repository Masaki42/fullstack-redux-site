const productsController = require('./controllers/products')

// show, index, new, create, update, destroy
const apiRouter = app => {
    app.get('/api/products', productsController.index)
    app.get('/api/products/:id', productsController.show)
    app.post('/api/products', productsController.create)
    app.put('/api/products/:id', productsController.update)
    app.delete('/api/products/:id', productsController.destroy)
}

module.exports = apiRouter
