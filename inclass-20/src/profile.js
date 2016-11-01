var headlines = { headlines : [{
			username : 'ys004',
			headline : 'h1!'
		}, {
			username : 'sep1',
			headline : 'h2!'
		}
	]}


// PUT /headline
const putHeadline = (req, res) => {
	res.send({ headlines : [{
		username : 'ys004',
		headline : req.body.headline || 'you did not supply it'
	}]})
}

// GET /headlines/ys004
const getHeadlines = (req, res) => {
	console.log(req.params.user)
	res.send({
		username : 'ys004',
		headline : 'hard-coded headline'
	})

}

// GET /email/:user?
const getEmail = (req, res) => {
	console.log(req.params.user)
	res.send({
		username : 'ys004',
		email : 'hard-coded@foo.com'
	})	
}

// PUT /email
const putEmail = (req, res) => {
	res.send({
		username : 'ys004',
		email : req.body.email || 'you did not supply it'
	})
}

// GET /zipcode/:user? 
const getZipcode = (req, res) => {
	console.log(req.params.user)
	res.send({
		username : 'ys004',
		zipcode : '77005'
	})	
}

// PUT /zipcode
const putZipcode = (req, res) => {
	res.send({
		username : 'ys004',
		zipcode : req.body.zipcode || 'you did not supply it'
	})
}

// GET /avatars/:user? 
const getAvatars = (req, res) => {
	console.log(req.params.user)
	res.send({
		username : 'ys004',
		avatar : 'hard-coded avatar'
	})	
}
// PUT /avatar
const putAvatar = (req, res) => {
	res.send({
		username : 'ys004',
		avatar : req.body.avatar || 'you did not supply it'
	})
}

module.exports = app => {
     app.get('/headlines/:user?', getHeadlines)
     app.put('/headline', putHeadline)
     app.get('/email/:user?', getEmail)
     app.put('/email', putEmail)
     app.get('/zipcode/:user?', getZipcode)
     app.put('/zipcode', putZipcode)
     app.get('/avatars/:user?', getAvatars)
     app.put('/avatar', putAvatar)     
}
