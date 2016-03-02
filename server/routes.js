const bindModelToActions = require('./utils/bindModelToActions')

const {
    Category,
    Product,
    Type
} = require('./models')

const mapActionsToApiHandlers = (actions, endpointName) => app => {
    app.get(`/api/${endpointName}`, actions.index)
    app.get(`/api/${endpointName}/:id`, actions.show)
    app.post(`/api/${endpointName}`, actions.create)
    app.put(`/api/${endpointName}/:id`, actions.update)
    app.delete(`/api/${endpointName}/:id`, actions.destroy)
}

const apiRouter = app => {
    mapActionsToApiHandlers(bindModelToActions(Category), `categories`)(app)
    mapActionsToApiHandlers(bindModelToActions(Product), `products`)(app)
    mapActionsToApiHandlers(bindModelToActions(Type), `types`)(app)
}

module.exports = apiRouter
