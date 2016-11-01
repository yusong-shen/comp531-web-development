/*
 * Test suite for articles.js
 */
const expect = require('chai').expect
require('es6-promise').polyfill()
const fetch = require('isomorphic-fetch')

const url = path => `http://localhost:3000${path}`

// GET /articles/:id
// POST /article
describe('Validate Article functionality', () => {

	it('should give me three or more articles', (done) => {
		// IMPLEMENT ME
		fetch(url('/articles'))
		.then(res => {
			expect(res.status).to.eql(200)
			return res.json()
		})
		.then(body => {
			expect(body.articles.length).to.be.at.least(3)
		})
		.then(done)
		.catch(done)
	}, 500)

	it('should return an article with a specified id', (done) => {
		fetch(url('/articles'))
		.then(res => {
			expect(res.status).to.eql(200)
			return res.json()
		})
		// call GET /articles first to find an id, perhaps one at random
		.then(body => {
			const idx = Math.floor(Math.random() * body.articles.length)
			return body.articles[idx]
		})
		// then call GET /articles/id with the chosen id
		// validate that only one article is returned	
		.then(article => {
			fetch(url(`/articles/${article.id}`))
			.then(res => {
				expect(res.status).to.eql(200)
				return res.json()
			})
			.then(body => {
				expect(body.articles.length).to.eql(1)
			})
		})
		.then(done)
		.catch(done)
	}, 200)

	it('should return nothing for an invalid id', (done) => {
		// call GET /articles/id where id is not a valid article id, perhaps 0
		// confirm that you get no results
		fetch(url('/articles/0'))
		.then(res => {
			expect(res.status).to.eql(200)
			return res.json()
		})
		.then(body => {
			expect(body.articles.length).to.eql(0)
		})
		.then(done)
		.catch(done)
	}, 200)

	it('should add two articles with successive article ids, and return the article each time', (done) => {
		// add a new article
		fetch(url('/article'), {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				'text':'A post 6'
			})
		})
		.then(res => {
			expect(res.status).to.eql(200)
			return res.json()
		})
		// verify you get the article back with an id
		// verify the content of the article
		.then(body => {
			expect(body.id).to.not.be.undefined
			expect(body.text).to.eql('A post 6')
			return body.id
		})
		// add a second article
		// verify the article id increases by one
		// verify the second artice has the correct content
		.then(oldId => {
			fetch(url('/article'), {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				text:'A post 7'
			})})
			.then(res => {
				expect(res.status).to.eql(200)
				return res.json()
			})
			.then(body => {
				expect(body.id).to.eql(oldId + 1)
				expect(body.text).to.eql('A post 7')
			})
		})
		.then(done)
		.catch(done)
 	}, 500)

});
