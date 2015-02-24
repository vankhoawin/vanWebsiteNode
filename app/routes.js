var mailer = require('./models/mailer');
var config = require('./config')

module.exports = function(app) {

	app.post('/contact', function(req, res) {
		mailer.send(req.body);
	})

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	})

};