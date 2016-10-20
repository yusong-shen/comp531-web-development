
const index = (req, res) => {
     res.send({ hello: 'world' })
}

module.exports = app => {
     app.get('/', index)
}
