/*
 * Test suite for hello.js
 */
const expect = require('chai').expect
const fetch = require('isomorphic-fetch')

const url = path => `http://localhost:3000${path}`

describe('Validate Hello Functionality', () => {

	it('should say Hello Somebody!', (done) => {
		fetch(url("/"))
		.then(res => {
			expect(res.status).to.eql(200)	
			return res.text()
		})
		.then(body => {
			expect(body).to.eql("Hello Somebody!")
		})
		.then(done)
		.catch(done)
 	}, 500)

	it('should say Hello Me!', (done) => {
		fetch(url('/Me'))
		.then(res => {
			expect(res.status).to.eql(200)
			return res.text()
		})
		.then(body => {
			expect(body).to.eql("Hello Me!")
		})
		.then(done)
		.catch(done)
 	}, 500)

})