// Inclass 13 Frontend Mocking

// this is in dummy.spec.js

	it('should update the headline', (done) => {
		const div = createDOM('user', 'pass', 'hello')
		expect(div.innerHTML).to.eql('hello')

		mock(`${url}/headline`, {
			method: 'PUT',
			headers: {'Content-Type': 'application/json'},
			json: {
				username: 'foo', headline: 'bar'
			}
		})
		updateHeadline('this value is not used').then(_ => {
			expect(div.innerHTML).to.eql('you are logged in as foo "bar"')
		})
		.then(done)
		.catch(done)
	})

// this is in dummy.js

const updateHeadline = (headline) =>
  resource('PUT', 'headline', { headline }).then((response) => {
    console.log(`New headline ${response.headline}`)
    const box = document.querySelector("#message")
    box.innerHTML = `you are logged in as ${response.username} "${response.headline}"`
  })