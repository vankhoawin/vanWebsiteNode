angular.module('MainCtrl', [])
.controller('MainController', ['$scope', '$location', function($scope, $location) {
	$scope.pictureCurr = 0;
	$scope.pictureMax = 14;

	$scope.changePictureLeft = function() {
		$scope.pictureCurr = ($scope.pictureCurr <= 0) ? ($scope.pictureMax-1) : ($scope.pictureCurr-1);
		console.log($scope.pictureCurr);
		document.body.style.backgroundImage = 'url(../static/back' + $scope.pictureCurr + '.jpg)';
	}

	$scope.changePictureRight = function() {
		$scope.pictureCurr = ($scope.pictureCurr >= ($scope.pictureMax-1)) ? 0 : ($scope.pictureCurr+1);
		console.log($scope.pictureCurr);			
		document.body.style.backgroundImage = 'url(../static/back' + $scope.pictureCurr + '.jpg)';
	}




	$scope.isActive = function(route) {
		if ($location.path() === '/')
			document.getElementById("transparency").style.background = 'rgba(0,0,0,0.0)';
		else
			document.getElementById("transparency").style.background = 'rgba(0,0,0,0.5)';
		
		return route === $location.path();
	}
}]);