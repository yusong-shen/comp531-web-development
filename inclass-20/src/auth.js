const md5 = require('md5')
const passport = require('passport')
const session = require('express-session')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const redis = require('redis').createClient(process.env.REDIS_URL)

// # heroku config | grep REDIS
// # heroku config:set GOOGLE_SECRET foobar
// const clientSecret = process.env.GOOGLE_SECRET
const clientSecret = "Iu3m9HNilrQ5oSMPQB9p7UhA"
const clientID = "382295936765-f6ifjt2so64q0krvijg06rsoktetot0n.apps.googleusercontent.com"
const callbackURL = 'http://localhost:3000/auth/google/callback'
const configAuth = {clientSecret, clientID, callbackURL}

const fb_clientSecret = "95d96480c7eb36c46588417c479a703e"
const fb_clientID = "983028555174660"
const fb_callbackURL = 'http://localhost:3000/auth/facebook/callback'
const fb_configAuth = {clientSecret : fb_clientSecret, clientID : fb_clientID, callbackURL : fb_callbackURL}

var User = require('./model.js').User

const getUser = (username, callback) => {
    User.find({ username : username}).exec(callback)

}

const cookieKey = 'sid'
// key : sid, value : username
const sessionUser = {}


const generateCode = (userObj) => {
	const code = md5(userObj.username)
	return code
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
		res.status(400).send('does not provide username or password')
		return
	}
	getUser(username, function (err, users) {
        if (!err) {
            if (users.length === 0) {
                console.log(`can\'t find user ${username}`)
                return
            } else {
                console.log('find the user : ', users[0])
                const userObj =  users[0]
                console.log('login : ')
                console.log(userObj)
                if (!userObj) {
                    // unauthorized
                    res.status(401).send('user does not exist')
                    return
                }
                const hash = md5(userObj.salt + password)
                if (hash !== userObj.hash) {
                    // unauthorized
                    res.status(401).send('password does not match')
                    return
                }

                // autherized, set cookie and send back message
                // Store the session id in an in-memory map from session to user
                const cookieValue = generateCode(userObj)
                // sessionUser[cookieValue] = username
                redis.hmset(cookieValue, userObj)
                res.cookie(cookieKey, cookieValue, { maxAge : 3600*1000, httpOnly : true})
                console.log('set cookies : ', req.cookies)
                const msg = {username : username, result : "success"}
                res.send(msg)
            }
        } else {
            throw err
        }
    })
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
		// 409 Conflict
		res.status(409).send(`${username} has already been registered.`)
		return
	}

	const userObj = { username, email, dob, zipcode}
	userObj.salt = 'some long long salt' + Math.random().toString()
	userObj.hash = md5(userObj.salt + password)
	// users.users.push(userObj)
    new User(userObj).save(function(err, doc) {
        if (err) {
            res.send(err)
        } else {
            console.log('save successfully! ', doc)
            const msg = {username : username, result : "success"}
            res.send(msg)
        }
    })


}

const isLoggedIn = (req, res, next) => {
	// read cookie
	console.log(req.cookies)
	console.log(sessionUser)
	const sid = req.cookies[cookieKey]

	if (!sid) {
		return res.status(401).send('sid undefined - user session does not exist')
	}

	// const username = sessionUser[sid]
    redis.hgetall(sid, function (err, userObj) {
        console.log(sid + ' mapped to ', userObj.username)
        if (userObj.username) {
            const username = userObj.username
            req.username = username
            next()
        } else {
            res.status(401).send('user session does not exist')
        }
    })

}

// PUT /logout
// /logout	PUT	none	OK	
// log out of server, clears session id
const logout = (req, res) => {
	const username = req.username
	console.log('log out as ', username)
	// clear session id and set empty cookie
	const sid = req.cookies[cookieKey]
	// delete sessionUser[sid]
    redis.del(sid)
	res.clearCookie(cookieKey)
	res.send('OK')
}

// /sample	GET	none
// [ { id: 1, author: Scott, ... }, { ... } ]	Array of sample posts.
const getSample = (req, res) => {
	res.send('array of sample posts.')
}

const profile = (req, res) => {
    res.send('log in as google : ', req.user)
}

const fail = (req, res) => {
    res.send('log in failed.')
}


const users = {}
// used to serialize the user for the session
passport.serializeUser(function(user, done) {
    console.log("serializeUser", user)
    users[user.id] = user
    done(null, user.id)
})

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    console.log("deserializeUser", id)
    const user = users[id]
    done(null, user)
})

// Configure the Google strategy for use by Passport.js.
//
// OAuth 2-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the Google API on the user's behalf,
// along with the user's profile. The function must invoke `cb` with a user
// object, which will be set at `req.user` in route handlers after
// authentication.
passport.use(new GoogleStrategy(configAuth, function (accessToken, refreshToken, profile, done) {
    // Extract the minimal profile information we need from the profile object
    // provided by Google
    // cb(null, extractProfile(profile));
    process.nextTick(function () {
        return done(null, profile)
    })
}))

passport.use(new FacebookStrategy(fb_configAuth, function (accessToken, refreshToken, profile, done) {
    // Extract the minimal profile information we need from the profile object
    process.nextTick(function () {
        console.log('TICK!')
        console.log(accessToken)
        return done(null, profile)
    })
}))

module.exports = app => {
    app.use(session({ secret : 'someSecret'}))
    app.use(passport.initialize())
    app.use(passport.session())
    app.post('/login', login)
    app.post('/register', register)
    app.get('/sample', getSample)
    app.put('/logout', isLoggedIn, logout)
    app.use('/auth/google/callback', passport.authenticate('google', {
        successRedirect : '/profile',
        failureRedirect : '/fail'
    }))
    app.use('/auth/google/login', passport.authenticate('google', {scope : 'email'}))

    app.use('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect : '/profile',
        failureRedirect : '/fail'
    }))
    app.use('/auth/facebook/login', passport.authenticate('facebook', {scope : 'email'}))


    app.use('/profile', profile)
    app.use('/fail', fail)
}