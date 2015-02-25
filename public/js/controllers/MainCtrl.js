angular.module('MainCtrl', [])
.controller('MainController', ['$scope', '$location', function($scope, $location) {

	$scope.slideshowImage = '../static/back0.jpg'

	$scope.slideshowCurr = 0;
	$scope.slideshowMax = 10;
	$scope.imgArray = new Array();

	$scope.decImage = function(index) {
		$scope.slideshowCurr = ($scope.slideshowCurr <= 0) ? $scope.slideshowMax : ($scope.slideshowCurr-1);

		if (typeof $scope.imgArray[$scope.slideshowCurr] === 'undefined') {
			$scope.imgArray[$scope.slideshowCurr] = new Image();
			$scope.imgArray[$scope.slideshowCurr].onload = function() {
				document.body.style.backgroundImage = 'url(../static/back' + $scope.slideshowCurr + '.jpg)';		
			}

			$scope.imgArray[$scope.slideshowCurr].src = '../static/back' + $scope.slideshowCurr + '.jpg';
		}else 
			document.body.style.backgroundImage = 'url(../static/back' + $scope.slideshowCurr + '.jpg)';		
	}

	$scope.incImage = function(index) {
		$scope.slideshowCurr = ($scope.slideshowCurr >= $scope.slideshowMax) ? 0 : ($scope.slideshowCurr+1);	

		if (typeof $scope.imgArray[$scope.slideshowCurr] === 'undefined') {
			$scope.imgArray[$scope.slideshowCurr] = new Image();
			$scope.imgArray[$scope.slideshowCurr].onload = function() {
				document.body.style.backgroundImage = 'url(../static/back' + $scope.slideshowCurr + '.jpg)';		
			}

			$scope.imgArray[$scope.slideshowCurr].src = '../static/back' + $scope.slideshowCurr + '.jpg';
		}else 
			document.body.style.backgroundImage = 'url(../static/back' + $scope.slideshowCurr + '.jpg)';		
	}

	$scope.findBase = function(route) {
		// find base root of view	
		var base = route.lastIndexOf("/"); 

		// if not base already, change to base
		var path = (base === 0) ? route : route.substring(0, base); 

		return path;
	}


	$scope.isActive = function(route) {
		var path = $scope.findBase($location.path());

		return route === path;
	}

	$scope.$on('$routeChangeSuccess', function(event, current, previous) {
		var path = $scope.findBase($location.path());

		if (path === '/photography') {
		  document.body.style.backgroundImage  = "url('../static/photoBG2.jpg')";
		}else {
			document.body.style.backgroundImage  = 'url(../static/back' + $scope.slideshowCurr + '.jpg)';
		  document.body.style.backgroundRepeat = "no-repeat";
		  document.body.style.backgroundSize   = "cover";
		}

	});



}]);