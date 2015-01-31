angular.module('MainCtrl', []).controller('MainController', function($scope, $location) {
	
	$scope.isActive = function(route) {
		if ($location.path() === '/')
			document.getElementById("transparency").style.background = 'rgba(0,0,0,0.0)';
		else
			document.getElementById("transparency").style.background = 'rgba(0,0,0,0.5)';
		
		return route === $location.path();
	}


});