var mailer = require('./models/mailer');

module.exports = function(app) {

	app.post('/contact', function(req, res) {
		mailer.send(req.body);
		res.sendfile('./public/index.html');
	})

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	})

};