
angular.module('ContactCtrl', []).controller('ContactController', ['$scope', '$http', function($scope, $http) {

	
	$scope.sendEmail = function(user) {
		if (user.name && user.address && user.subject && user.body) {

			var mail = {
		    from: user.name + ' <' + user.address + '>', // sender address
		    to: 'vnguyen94@gmail.com', // list of receivers
		    subject: user.subject, // Subject line
		    text: user.body, // plaintext body
		    html: '<b>' + user.body + '</b>' // html body
			};

			var res = $http.post('/contact', mail);

			res.success(function(data, status, headers, config) {
				console.log("success!");
			});

			res.error(function(data, status, headers, config) {
				console.log("error...");
			});


			document.getElementById("contact-name").className += " text-disable";
			document.getElementById("contact-address").className += " text-disable";
			document.getElementById("contact-subject").className += " text-disable";
			document.getElementById("contact-body").className += " text-disable";
			document.getElementById("contact-button").className += " disabled";
			document.getElementById("contact-text").className += "glyphicon glyphicon-ok";
			document.getElementById("contact-text").innerHTML = " Sent!";
			
		}
	}
}]);