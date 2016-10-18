
const express = require('express')
const bodyParser = require('body-parser')

var articles = { articles: [ 
          { id:1, author: 'Scott', body:'A post 1' },
          { id:2, author: 'Scott1', body:'A post 2' },
          { id:3, author: 'Scott2', body:'A post 3' }
     ]}

// receives a JSON article, return the article with an id, 
// and add the article to the list returned by GET
const addArticle = (req, res) => {
     console.log('Payload received', req.body)    
     var numArticles = articles['articles'].length;
     var article = {}
     article.id = numArticles + 1
     article.body = req.body.body
     res.send(article)
     articles['articles'].push(article)

}

const hello = (req, res) => res.send({ hello: 'world' })

const app = express()
app.use(bodyParser.json())
app.post('/article', addArticle)
app.get('/', hello)

// Get the port from the environment, i.e., Heroku sets it
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
     const addr = server.address()
     console.log(`Server listening at http://${addr.address}:${addr.port}`)
})

// supplies JSON articles, start with 3 hard coded articles
const getArticles = (req, res) => {
	res.send(articles)	
}

app.get('/articles', getArticles)