angular.module('ContactCtrl', []).controller('ContactController', function($scope) {

	$scope.sendEmail = function(user) {
		if (user.name && user.address && user.subject && user.body) {
			console.log(user);
			document.getElementById("contact-button").className += " disabled";
			document.getElementById("contact-text").className += "glyphicon glyphicon-ok";
			document.getElementById("contact-text").innerHTML = " Sent!";

		}

		// console.log(user.address);
	}

});