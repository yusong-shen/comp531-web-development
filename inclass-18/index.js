
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')



const app = express()
app.use(bodyParser.json())
app.use(logger('default'))

require('./src/articles.js')(app)
// require('./src/hello.js')(app)


// Get the port from the environment, i.e., Heroku sets it
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
     const addr = server.address()
     console.log(`Server listening at http://${addr.address}:${addr.port}`)
})
