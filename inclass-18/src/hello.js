
const helloUser = (req, res) => {
	const user = req.params.user || 'Somebody'
	res.send('Hello ' + user + '!')
}

module.exports = (app) => {
	app.get('/:user*?', helloUser)
}

