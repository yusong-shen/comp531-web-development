const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cookieParser = require('cookie-parser')

const middlewareCORS = (req, res, next) => {
    console.log('call middlewareCORS()')
    console.log(req.headers)
    const origin = req.headers.origin
    if (origin) {
        res.set('Access-Control-Allow-Origin', origin)
    }
    res.set('Access-Control-Allow-Credentials', true)
    res.set('Access-Control-Allow-Headers', 'Authorization, Content-Type')
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    next()
}

const app = express()
app.use(bodyParser.json())
app.use(logger('default'))
app.use(cookieParser())
app.use(middlewareCORS)

require('./src/following')(app)
require('./src/auth.js')(app)
require('./src/profile.js')(app)
require('./src/articles.js')(app)
require('./src/hello.js')(app)


// Get the port from the environment, i.e., Heroku sets it
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
     const addr = server.address()
     console.log(`Server listening at http://${addr.address}:${addr.port}`)
})
