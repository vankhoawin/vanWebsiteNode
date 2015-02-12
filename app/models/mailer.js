var nodemailer = require('nodemailer');
var config = require('../config');

var smtpTransport = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: config.email,
		pass: config.password
	}
});

exports.send = function(mailOptions) {
	smtpTransport.sendMail(mailOptions, function(err, res) {
		if(err)
			console.log(err);
		else
			console.log("Message sent: " + res.message);

	});
}


smtpTransport.close();