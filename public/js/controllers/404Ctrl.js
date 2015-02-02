angular.module('404Ctrl', []).controller('404Controller', function($scope) {
	$scope.$on('$routeChangeSuccess', function(event, current, previous) {
	  document.body.style.backgroundImage  = "url('../static/404.jpg')";
	});
});