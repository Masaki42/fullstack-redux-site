var appRouter = function(app, db) {
    // CREATE
    app.post('/api/posts', function(req, res) {
        var newPost = {
            title: req.body.title,
            text: req.body.text
        }
        return db.posts.insert(newPost, function(err, posts) {
            if (err) {
                res.statusCode = 500
                console.error('Internal error(%d): %s', res.statusCode, err.message)
                return res.send({error: 'Server error'})
            }
            console.info("Post created")
            return res.send({status: 'OK', post: post})
        })
    })
    // READ :id
    app.get('/api/posts/:id', function(req, res) {
        res.send('Read')
    })
    // READ all
    app.get('/api/posts', function(req, res) {
        return db.posts.find(function(err, posts) {
            if (err) {
                res.statusCode = 500
                console.error('Internal error(%d): %s', res.statusCode, err.message)
                return res.send({error: 'Server error'})
            }
            return res.send(posts)
        })
    })
    // UPDATE
    app.put('/api/posts/:id', function(req, res) {
        res.send('Update')
    })
    // DELETE :id
    app.delete('/api/posts/:id', function(req, res) {
        res.send('Delete')
    })
}

module.exports = appRouter
