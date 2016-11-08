// this is model.js 
var mongoose = require('mongoose')
require('./db.js')

var commentSchema = new mongoose.Schema({
	commentId: Number, author: String, date: Date, text: String
})
var articleSchema = new mongoose.Schema({
	id: Number, author: String, img: String, date: Date, text: String,
	comments: [ commentSchema ]
})


exports.Article = mongoose.model('article', articleSchema)

// const defaultUserObj = {
//     username: 'defaultUser',
//     email: 'foo@bar.com',
//     zipcode: '77005',
//     dob: new Date().getTime()
// }
//
// defaultUserObj.salt = 'some long long salt' + Math.random().toString()
// defaultUserObj.hash = md5(defaultUserObj.salt + 'SomeLongPasswordCoolStuff')
//

var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    dob: Date,
    zipcode: Number,
    salt: String,
    hash: String
})

exports.User = mongoose.model('user', userSchema)