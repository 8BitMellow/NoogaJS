var noogajs = angular.module("noogajs", []).config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'tmpl/home.html',
		controller: 'HomeController'
	});
	$routeProvider.when('/login', {
		templateUrl: 'tmpl/login.html',
		controller: 'LoginController'
	});
	$routeProvider.when('/about', {
		templateUrl: 'tmpl/about.html',
		controller: 'AboutController'
	});
	$routeProvider.when('/news', {
		templateUrl: 'tmpl/news.html',
		controller: 'NewsController'
	});
	$routeProvider.when('/meetup', {
		templateUrl: 'tmpl/meetup.html',
		controller: 'MeetupController'
	});
	$routeProvider.when('/learn', {
		templateUrl: 'tmpl/learn.html',
		controller: 'LearnController'
	});

	$routeProvider.otherwise({ redirectTo: '/'});
});


// CONTROLLERS

noogajs.controller('HomeController', function() {
	console.log('HomeController Fired');

});

noogajs.controller('LoginController', function() {

});

noogajs.controller('AboutController', function() {

});

noogajs.controller('NewsController', function() {

});

noogajs.controller('MeetupController', function() {

});

noogajs.controller('LearnController', function() {

});
