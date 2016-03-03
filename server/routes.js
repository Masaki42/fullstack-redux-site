const models = require('./models')
const bindModelToActions = require('./utils/bindModelToActions')

let respondWithCRUD = (app, models) => path => {
    const actions = bindModelToActions(models[path])

    app.get(`/api/${path}`, actions.index)
    app.get(`/api/${path}/:id`, actions.show)
    app.post(`/api/${path}`, actions.create)
    app.put(`/api/${path}/:id`, actions.update)
    app.delete(`/api/${path}/:id`, actions.destroy)
}

module.exports = app => {
    respondWithCRUD = respondWithCRUD(app, models)

    respondWithCRUD(`categories`)
    respondWithCRUD(`products`)
    respondWithCRUD(`types`)
}
