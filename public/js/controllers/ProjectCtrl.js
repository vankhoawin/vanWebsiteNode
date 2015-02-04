angular.module('ProjectCtrl', []).controller('ProjectController', function($scope) {

	$scope.projects = [
		{
			'title'  			: 'Personal Website (2015)',
			'image'  			: '../static/projects/website3.jpg',
			'source' 			: '',
			'github' 			: 'https://github.com/vnguyen94/vanWebsiteNode',
			'description' : 'You\'re looking at it. Single page application made with Node, AngularJS, and ExpressJS. The photography section is dynamically created using Flickr API.'
		},
		{
			'title'  			: 'MHI Windpower Website (2014)',
			'image' 			: '../static/projects/mhi.jpg',
			'source'			: '',
			'github'			: '',
			'description' : 'Website I built for my former company to replace the old website. Runs on a LAMP stack (Python with Flask); has fully functional back-end where different users have different views depending on job description (i.e. Admin, HR). HR can input new jobs as requested, which are scraped by Indeed.com every 24 hours and put into their job listing.'
		},
		{
			'title'  			: 'Personal Website (2014)',
			'image'  			: '../static/projects/website2.jpg',
			'source' 			: 'http://vanflaskwebsite2.herokuapp.com/',
			'github' 			: 'https://github.com/vnguyen94/website2.0',
			'description' : 'First website I created with Flask + Python. Weak scalability, stopped progress once I realized what I wanted was a SPA. Resume page was fun to make.'
		},
		{
			'title'  			: 'C++ File System (2014)',
			'image'  			: '../static/projects/filesystem53.jpg',
			'source' 			: '',
			'github' 			: '',
			'description' : 'Group project for ICS 53 (Principles in System Design). The file system was able to open buffers to read and write to files, character by character. Extra memory blocks were allocated dynamically when one file\'s block was filled.'
		},
		{
			'title'  			: 'pyShotGame (2013)',
			'image'  			: '../static/projects/pyshotgame.jpg',
			'source' 			: '',
			'github' 			: 'https://github.com/vnguyen94/pyShotGame',
			'description' : 'Collaboration between TC Nguyen and I. Contributed game logic including random monster spawns, hitbox calculations and bulllet trajectories.'
		},
		{
			'title'  			: 'Personal Website (2013)',
			'image' 			: '../static/projects/website.jpg',
			'source' 			: 'http://www.ics.uci.edu/~vknguye2/index.html',
			'github' 			: '',
			'description' : 'First website I ever made: static, individually coded pages, zero templating. Most intensive use of Javascript -- copied and pasted from the internet -- is in the Photography section. Konami code?'
		}
	];	

});