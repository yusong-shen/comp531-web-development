/**
 * Created by yusong on 10/25/16.
 */

var Article = require('./model.js').Article

// POST /article should create a new article in mongo
// return the saved article with an id,
const addArticle = (req, res) => {
     console.log('Payload received', req.body)
     if (req.body.text) {
     Article.find().exec(function(err, articles) { 
        console.log("There are " + articles.length + " articles total in db") 
        new Article({ 
          id: articles.length + 1, author: 'sep1', img: null, date: new Date().getTime(), 
          text: req.body.text}).save(function(err, doc) {
            if (err) {
              res.send(err)
            } else {
              console.log('save successfully! ', doc)
              res.send({'articles' : [doc]})
            }
          })
     })
     } else {
      res.send("error : payload should have a text field.")
     }

}

// GET /articles should retrieve all articles from mongo
// GET /articles/id should retrieve all articles with that id from mongo
const getArticles = (req, res) => {
    const id = req.params.id
    let condition = {}
    if (id) {
      condition._id = id
    }
    Article.find(condition).exec(function(err, articles) {
      if (!err){ 
        console.log('There are ' + articles.length + ' entries ')
        // console.log(items)
        res.send({articles})
      } else {
        throw err
      }
    })

}


module.exports = (app) => {
	app.post('/article', addArticle)
	app.get('/articles/:id*?', getArticles)
}