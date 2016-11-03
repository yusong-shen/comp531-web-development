const md5 = require('md5')


const defaultUserObj = {
	username: 'defaultUser',
	email: 'foo@bar.com',
	zipcode: '77005',
	dob: new Date().getTime()
}

defaultUserObj.salt = 'some long long salt' + Math.random().toString()
defaultUserObj.hash = md5(defaultUserObj.salt + 'SomeLongPasswordCoolStuff')

const users = {
	users : [defaultUserObj]
}


const getUser = (username) => {
	const result = users.users.filter((user) => user.username === username)
	if (result.length === 0) {
		return
	} else {
		return result[0]
	}
}

// POST /login
// {username: username, password: password }	
// { username: :user, result: "success"}	
// log in to server, sets session id and hash cookies
const login = (req, res) => {
	console.log(req.body)
	var username = req.body.username
	var password = req.body.password
	if (!username || !password) {
		res.sendStatus(400)
		return
	}
	var userObj = getUser(username)
	if (!userObj) {
		// unauthorized
		res.sendStatus(401)
		return
	}
	const hash = md5(userObj.salt + password)
	if (hash !== userObj.hash) {
		// unauthorized
		res.sendStatus(401)
		return		
	}

	// autherized, set cookie and send back message
	// res.cookie(cookieKey)
	const msg = {username : username, result : "success"}
	res.send(msg)
}

// POST /register
// request payload : { username, email, dob, zipcode, password}	
// response payload : { result: 'success', username: username}	
const register = (req, res) => {
	console.log(req.body)
	var username = req.body.username
	var password = req.body.password
	var email = req.body.email
	var dob = req.body.dob
	var zipcode = req.body.zipcode

	if (getUser(username)) {
		res.send(`${username} has already been registered.`)
		return
	}

	const userObj = { username, email, dob, zipcode}
	userObj.salt = 'some long long salt' + Math.random().toString()
	userObj.hash = md5(userObj.salt + password)
	users.users.push(userObj)

	const msg = {username : username, result : "success"}	
	res.send(msg)
}

// PUT /logout
const logout = (req, res) => {
	res.send('log out successfully!')
}

const getSample = (req, res) => {
	res.send('array of sample posts.')
}

// /sample	GET	none	[ { id: 1, author: Scott, ... }, { ... } ]	Array of sample posts.
// /logout	PUT	none	OK	log out of server, clears session id

module.exports = app => {
     app.post('/login', login)
     app.post('/register', register)
     app.get('/sample', getSample)  
     app.put('/logout', logout)  

}