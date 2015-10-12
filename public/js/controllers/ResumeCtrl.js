angular.module('ResumeCtrl', []).controller('ResumeController', function($scope) {

  $scope.skills = [
    'Primary: JavaScript (NodeJS), Python, C++',
    'Secondary: SQL, Java + Android, MongoDB + MongooseJS',
    'Frameworks: AngularJS, ExpressJS, Flask',
    'Testing: MochaJS + Chai, Karma, NightwatchJS',
    'Miscellaneous: HTML5, CSS3, jQuery, Git, Bootstrap, SASS, Gulp',
    'Currently Learning: ECMAScript 2015 (ES6), ReactJS + Redux, Webpack'
  ];

  $scope.entries = [
    {
      company: 'SupplyFrame',
      date: 'June 2015 - September 2015',
      title: 'Front End Engineering Intern',
      bullets: [
        'Contribute client-side and server-side JavaScript as well as design for Hackaday.io – a platform for users to view, share, and collaborate on hardware hacks',
        'Tasks ranged from front-end design and AJAX calls to creating API entrypoints, feed processing, and database queries',
        'Mainly worked on feed redesign, which groups similar user activities that previously were all listed separately',
        'Write jQuery plugin that pops up a detailed description about a user when hovering over their username; able to load offline data or from an API call'
      ]
    },
    {
      company: 'MHI Windpower Americas, Inc.',
      date: 'April 2014 - September 2014',
      title: 'Web/Mobile App Developer',
      bullets: [
        'Developed new company website (not currently deployed) for use by multiple departments',
        'Co-developed Windows app for technicians to use at wind turbines',
        'Tested and provided feedback on companywide rollout of ERP software'
      ]
    },
    {
      company: 'vSked Android Application',
      date: 'February 2014 - June 2014',
      title: 'UCI STAR Group Researcher',
      bullets: [
        'Helped create an interactive visual scheduling system in an Android app, connecting multiple tablets to one teacher tablet, whose screen was projected onto a classroom-viewed screen',
        'Designed to be readily used for autistic kids in classrooms',
        'Programmed in the back-end, mainly worked on NFC chip integration with the tablets'
      ]
    },
    {
      company: 'Donald Bren School of Information and Computer Sciences',
      date: 'September 2013 - December 2013',
      title: 'Lab Tutor',
      bullets: [
        'Tutored two classrooms of +20 students in assignments and core concepts of computer science',
        'Helped teaching assistants and professors in managing their courses',
        'Programmed in Python'
      ]
    }
  ];

});