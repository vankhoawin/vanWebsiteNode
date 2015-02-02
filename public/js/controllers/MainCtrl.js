angular.module('MainCtrl', [])
.controller('MainController', ['$scope', '$location', function($scope, $location) {

	$scope.slideshowImage = '../static/back0.jpg'

	$scope.slideshowCurr = 0;
	$scope.slideshowMax = 13;

	$scope.decImage = function(index) {
		$scope.slideshowCurr = ($scope.slideshowCurr <= 0) ? $scope.slideshowMax : ($scope.slideshowCurr-1);
		// $scope.slideshowImage = '../static/back' + $scope.slideshowCurr + '.jpg'
		document.body.style.backgroundImage = 'url(../static/back' + $scope.slideshowCurr + '.jpg)';
	}

	$scope.incImage = function(index) {
		$scope.slideshowCurr = ($scope.slideshowCurr >= $scope.slideshowMax) ? 0 : ($scope.slideshowCurr+1);
		// $scope.slideshowImage = '../static/back' + $scope.slideshowCurr + '.jpg'
		document.body.style.backgroundImage = 'url(../static/back' + $scope.slideshowCurr + '.jpg)';		
	}

	$scope.isActive = function(route) {
		// find base root of view
		var base = $location.path().lastIndexOf("/"); 

		// if not base already, change to base
		var path = (base === 0) ? $location.path() : $location.path().substring(0, base); 

		return route === path;
	}

	$scope.$on('$routeChangeSuccess', function(event, current, previous) {
		if ($location.path() === '/') {
			document.getElementById("transparency").style.backgroundColor = 'rgba(0,0,0,0.0)';
		}
		else {
			document.getElementById("transparency").style.backgroundColor = 'rgba(0,0,0,0.5)';
		}
	});



}]);