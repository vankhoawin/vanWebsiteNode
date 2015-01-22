angular.module('MainCtrl', []).controller('MainController', function($scope, $location) {

	$scope.isActive = function(route) {
		return route === $location.path();
	}
});