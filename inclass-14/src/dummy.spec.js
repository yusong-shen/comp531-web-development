import { expect } from 'chai'
import { url, login, logout, updateHeadline } from './dummy'

// npm install https://www.clear.rice.edu/comp431/sample/mock-fetch.tgz
import fetch, { mock } from 'mock-fetch'

describe('Validate login', () => {

	beforeEach(() => {
		global.fetch = fetch
	})

	afterEach(() => {
		while (document.body.children.length) {
			document.body.removeChild(document.body.children[0])
		}
	})

	const createDOM = (username, password, message) => {
		const add = (tag, id, value) => {
			const el = document.createElement(tag)
			el.id = id
			el.value = value
			el.style = { display: 'inline' }
			document.body.appendChild(el)
			return el
		}
		add('input', 'username', username)
		add('input', 'password', password)
		const d = add('div', 'message', message)
		d.innerHTML = message
		return d
	}

	it('should log the user in', (done) => {
		const div = createDOM('user', 'pass', 'hello')
		expect(div.innerHTML).to.eql('hello')

		mock(`${url}/login`, { 
			method: 'POST',
			headers: {'Content-Type': 'application/json'}
		})
		mock(`${url}/headlines`, {
			headers: {'Content-Type': 'application/json'},
			json: {
				headlines: [{username: 'hi', headline:'ok'}]
			}
		})

		login().then(_ => {
			expect(div.innerHTML)
				.to.eql('you are logged in as hi "ok"')
		})
		.then(done)
		.catch(done)
	})

	it('should log the user out', (done) => {
		const div = createDOM('user', 'pass', 'hello')
		expect(div.innerHTML).to.eql('hello')
		
		mock(`${url}/logout`, { 
			method: 'PUT',
			headers: {'Content-Type': 'application/json'}
		})
		logout().then(_ => {
			expect(div.innerHTML).to.eql('You have logged out')
		})
		.then(done)
		.catch(done)
	})

	it('should update the headline', (done) => {
		const div = createDOM('user', 'pass', 'hello')
		expect(div.innerHTML).to.eql('hello')

		// IMPLEMENT ME
		//   * mock the AJAX request to PUT headline
		//   * update the headline by calling updateHeadline(...)
		//   * Verify the new value of the headline in div.innerHTML

		done(new Error('not implemented'))
	})

})
