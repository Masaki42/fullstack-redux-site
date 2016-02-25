const bindModelToActions = require('./utils/bindModelToActions')

const {
    Category,
    Product,
    Type
} = require('./models')

const CategoriesController = bindModelToActions(Category)
const ProductsController = bindModelToActions(Product)
const TypesController = bindModelToActions(Type)


const apiRouter = app => {
    app.get('/api/categories', CategoriesController.index)
    app.get('/api/categories/:id', CategoriesController.show)
    app.post('/api/categories', CategoriesController.create)
    app.put('/api/categories/:id', CategoriesController.update)
    app.delete('/api/categories/:id', CategoriesController.destroy)

    app.get('/api/products', ProductsController.index)
    app.get('/api/products/:id', ProductsController.show)
    app.post('/api/products', ProductsController.create)
    app.put('/api/products/:id', ProductsController.update)
    app.delete('/api/products/:id', ProductsController.destroy)

    app.get('/api/types', TypesController.index)
    app.get('/api/types/:id', TypesController.show)
    app.post('/api/types', TypesController.create)
    app.put('/api/types/:id', TypesController.update)
    app.delete('/api/types/:id', TypesController.destroy)
}

module.exports = apiRouter
