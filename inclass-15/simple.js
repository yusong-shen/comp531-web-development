// https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
var http = require('http')

var host = '127.0.0.1'
var port = 3333
// Request | Response
// curl http://127.0.0.1:3333 
// GET / | { hello: ‘world’ }

// curl http://127.0.0.1:3333/articles
var articles = { articles: [ 
          { id:1, author: 'Scott', body:'A post 1' },
          { id:2, author: 'Scott1', body:'A post 2' },
          { id:3, author: 'Scott2', body:'A post 3' }
     ]}

// curl http://127.0.0.1:3333/login -H "Content-Type : application/json" -d '{"username":"ys43", "password":"foo"}'
// POST /login with payload { username: ..., password: ... } | { username: <username>, result: ‘success’ }

// curl http://127.0.0.1:3333/logout -X PUT
// PUT /logout | OK

http.createServer(preprocess).listen(port, host)
console.log('Server running at http://' + host + ':' + port)

function preprocess(req, res) {
     // if (request.method === 'GET' && request.url === '/echo') 
     var body = ''
     req.on('data', function(chunk) {
          body += chunk
     })
     req.on('end', function() {
          req.body = body
          server(req, res)
     })


}

function server(req, res) {
     console.log('Request method        :', req.method)
     console.log('Request URL           :', req.url)
     console.log('Request content-type  :', req.headers['content-type'])
     console.log('Request payload       :', req.body)

     res.setHeader('Content-Type', 'application/json')
     res.statusCode = 200
     switch (req.url) {
          case '/':
               var payload = { 'hello': 'world' }
               res.end(JSON.stringify(payload))
               break
          case '/articles':
               var payload = articles
               res.end(JSON.stringify(payload))               
               break
          case '/login':
               if (req.method === 'POST') {
                    var payload = {}
                    var reqJson = JSON.parse(req.body)
                    payload.username = reqJson.username
                    payload.result = 'success'
                    res.end(JSON.stringify(payload))
               }
               break
          case '/logout':
               if (req.method === 'PUT') {
                    var payload = 'OK'
                    res.end(JSON.stringify(payload))
               }
               break
          default:
               console.log('url that we do not want to handle')
     }
}
