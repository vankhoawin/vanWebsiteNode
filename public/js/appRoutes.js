angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		})

		.when('/projects', {
			templateUrl: 'views/projects.html',
			controller: 'GeekController'	
		});

	$locationProvider.html5Mode(true);

}]);