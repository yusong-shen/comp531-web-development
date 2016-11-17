const profiles = {
	'ys004' : {
		headline: 'This is my headline!',
		email: 'foo@bar.com',
		zipcode: 12345,
		avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/DWLeebron.jpg/220px-DWLeebron.jpg',

	},
	'sep1' : {
		headline: 'hard-coded headline 002',
		email: 'foo@bar.com',
		zipcode: 12345,
		avatar: 'hard-coded avatar 002',

	},
	'sep1test' : {
		headline: 'hard-coded headline 003',
		email: 'foo@bar.com',
		zipcode: 12345,
		avatar: 'hard-coded avatar 003',

	},
	'ys43' : {
		headline: 'hard-coded headline 004',
		email: 'foo@bar.com',
		zipcode: 12345,
		avatar: 'hard-coded avatar 004',

	}
}

// PUT /headline
const putHeadline = (req, res) => {
	const user = 'ys004'
	profiles[user].headline = req.body.headline || 'you did not supply it'
	if (profiles[user]) {
		res.send({
			username : 'ys004',
			headline : profiles[user].headline
		})
	}

}

// GET /headlines/ys004
const getHeadlines = (req, res) => {
	// for now we provide a default
	if (!req.user) req.user = 'ys004'

	const users = req.params.users ? req.params.users.split(',') : [req.user]

	// this returns only one headline, but we want to send
	// an array of all the requested user's headlines

	// Implement the logic to return headlines for all requested users
	// each user has a default value.  Only the "req.user" value ever changes.
	const result = users.map((x) => {
		if (profiles[x]) {
			return {
				username : x,
				headline : profiles[x].headline
			}
		} else {
			return {
				username : x,
				headline : `random headline for ${x}`
			}
		}
	})
	res.send({ headlines: result })

}

// GET /email/:user?
const getEmail = (req, res) => {
	if (!req.user) req.user = 'ys004'
	const user = req.params.user ? req.params.user : req.user
	if (profiles[user]) {
		res.send({
			username : user,
			email : profiles[user].email
		})
	}
}

// PUT /email
const putEmail = (req, res) => {
	if (!req.user) req.user = 'ys004'
	const user = req.user
	if (profiles[user]) {
		profiles[user].email = req.body.email || 'you did not supply it'
		res.send({
			username : user,
			email : profiles[user].email
		})
	}
}

// GET /zipcode/:user?
const getZipcode = (req, res) => {
	if (!req.user) req.user = 'ys004'
	const user = req.params.user ? req.params.user : req.user
	if (profiles[user]) {
		res.send({
			username : user,
			zipcode : profiles[user].zipcode
		})
	}
}

// PUT /zipcode
const putZipcode = (req, res) => {
	if (!req.user) req.user = 'ys004'
	const user = req.user
	if (profiles[user]) {
		profiles[user].zipcode = req.body.zipcode || 'you did not supply it'
		res.send({
			username : user,
			zipcode : profiles[user].zipcode
		})
	}
}

// GET /avatars/:user?
const getAvatars = (req, res) => {
	if (!req.user) req.user = 'ys004'
	const users = req.params.user ? req.params.user.split(',') : [req.user]
	// each user has a default value.  Only the "req.user" value ever changes.
	const result = users.map((x) => {
		if (profiles[x]) {
			return {
				username : x,
				avatar : profiles[x].avatar
			}
		} else {
			return {
				username : x,
				headline : `random avatar for ${x}`
			}
		}
	})
	res.send({ avatars: result })
}
// PUT /avatar
const putAvatar = (req, res) => {
	if (!req.user) req.user = 'ys004'
	const user = req.user
	if (profiles[user]) {
		profiles[user].avatar = req.body.avatar || 'you did not supply it'
		res.send({
			username : user,
			avatar : profiles[user].avatar
		})
	}
}

// GET /dob
const getDob = (req, res) => {
	if (!req.user) req.user = 'ys004'
	const user = req.user
	res.send({
		username : user,
		dob : new Date().getTime()
	})
}

module.exports = app => {
	app.get('/headlines/:users*?', getHeadlines)
	app.put('/headline', putHeadline)
	app.get('/email/:user?', getEmail)
	app.put('/email', putEmail)
	app.get('/zipcode/:user?', getZipcode)
	app.put('/zipcode', putZipcode)
	app.get('/avatars/:user?', getAvatars)
	app.put('/avatar', putAvatar)
	app.get('/dob', getDob)

}
