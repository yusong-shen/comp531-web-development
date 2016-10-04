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
		.catch(done)
		.then(done)
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
		.catch(done)
		.then(done)
	})

	it('should update the headline', (done) => {
		// IMPLEMENT ME
		//   * Log the user in
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
		//   * Verify the current value of the headline
		login().then(_ => {
			expect(div.innerHTML)
				.to.eql('you are logged in as hi "ok"')
		})
		const newHeadline = 'I am new headline!';
		mock(`${url}/headline`, { 
			method: 'PUT',			
			headers: {'Content-Type': 'application/json'},
			json: {
				// headlines: [{username: 'hi', headline: newHeadline}]
				headline: newHeadline
			}

		})
		//   * update the headline
		//   * Verify the new value of the headline
		updateHeadline(newHeadline).then(_ => {
			expect(div.innerHTML).to.eql('New headline is "I am new headline!"')
		})
		.then(done)
		.catch(done)
	})

})
