angular.module('HomeCtrl', [])
.controller('HomeController', ['$scope', function($scope) {

	$scope.$on('$routeChangeSuccess', function(event, current, previous) {
  	document.getElementById("transparency").style.backgroundColor = 'rgba(0,0,0,0)';
	});


}]);