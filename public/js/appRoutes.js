var myApp = angular.module('appRoutes', [])

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			title: 'Home',
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/resume', {
			title: 'Resume',
			templateUrl: 'views/resume.html',
			controller: 'ResumeController'
		})
		
		.when('/projects', {
			title: 'Projects',
			templateUrl: 'views/projects.html',
			controller: 'ProjectController'	
		})
		
		.when('/photography', {
			title: 'Photography',
			templateUrl: 'views/photography.html',
			controller: 'PhotographyController'
		})
		
		.when('/contact', {
			title: 'Contact',
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		});

		

	$locationProvider.html5Mode(true);

}]);