var myApp = angular.module('appRoutes', [])

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			title: 'Van Nguyen | Home',
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/resume', {
			title: 'Van Nguyen | Resume',
			templateUrl: 'views/resume.html',
			controller: 'ResumeController'
		})
		
		.when('/projects', {
			title: 'Van Nguyen | Projects',
			templateUrl: 'views/projects.html',
			controller: 'ProjectController'	
		})
		
		
		.when('/contact', {
			title: 'Van Nguyen | Contact',
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		});

		

	$locationProvider.html5Mode(true);

}]);