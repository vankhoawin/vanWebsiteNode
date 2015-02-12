var mailer = require('./models/mailer');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================

	app.post('/contact', function(req, res) {
		console.log("contact bitches");
		console.log(req.body);

		mailer.send(req.body);

		res.sendfile('./public/index.html');

		// res.sendfile('./public/index.html', { check: mailer.check }, function(err, html) {
		// 	console.log("inside: " + mailer.check);
		// 	res.send(html);
		// })
	})

	app.get('*', function(req, res) {
		console.log("alsohere");
		// res.render('./public/index.html', function(err,html) {
		// 	res.send(html);
		// });
		res.sendfile('./public/index.html');
	})

};