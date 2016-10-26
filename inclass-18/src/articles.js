/**
 * Created by yusong on 10/25/16.
 */
let articles = { articles: [ 
          { id:1, author: 'Scott', text:'A post 1' },
          { id:2, author: 'Scott1', text:'A post 2' },
          { id:3, author: 'Scott2', text:'A post 3' },
          { id:4, author: 'ys004', text:'A post 4' },
          { id:5, author: 'ys005', text:'A post 5' },

     ]}

// receives a JSON article, return the article with an id, 
// and add the article to the list returned by GET
const addArticle = (req, res) => {
     console.log('Payload received', req.body)
     const numArticles = articles['articles'].length;
     const article = {}
     article.id = numArticles + 1
     // console.log(typeof(req.body))
     article.text = req.body.text
     res.send(article)
     articles['articles'].push(article)

}
// supplies JSON articles, start with 5 hard coded articles
const getArticles = (req, res) => {
    const id = req.params.id
    if (!id) {
        res.send(articles)
    } else {
    	const result = {}
    	result.articles = articles.articles.filter(x => (x.id == id))
        res.send(result)
    }
}


module.exports = (app) => {
	app.post('/article', addArticle)
	app.get('/articles/:id*?', getArticles)
}