angular.module('TitleCtrl', []).controller('TitleController', function($rootScope) {

	$rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
		$rootScope.title = current.$$route.title;
	});
});