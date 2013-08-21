var noogajs = angular.module("noogajs", []).config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	});
	$routeProvider.when('/home', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	});
	$routeProvider.when('/about', {
		templateUrl: 'templates/about.html',
		controller: 'AboutController'
	});
	$routeProvider.when('/learn', {
		templateUrl: 'templates/learn.html',
		controller: 'LearnController'
	});
	$routeProvider.when('/learn/history', {
		templateUrl: 'templates/learn/history.html',
		controller: 'LearnController'
	});
	$routeProvider.when('/learn/libraries', {
		templateUrl: 'templates/learn/libraries.html',
		controller: 'LearnController'
	});
	$routeProvider.when('/learn/frameworks', {
		templateUrl: 'templates/learn/frameworks.html',
		controller: 'LearnController'
	});
	$routeProvider.when('/learn/patterns', {
		templateUrl: 'templates/learn/patterns.html',
		controller: 'LearnController'
	});	
	$routeProvider.when('/learn/readlist', {
		templateUrl: 'templates/learn/readlist.html',
		controller: 'LearnController'
	});
	$routeProvider.when('/learn/watchlist', {
		templateUrl: 'templates/learn/watchlist.html',
		controller: 'LearnController'
	});
	$routeProvider.when('/meetup', {
		templateUrl: 'templates/meetup.html',
		controller: 'MeetupController'
	});
	$routeProvider.when('/meetups/sep2013', {
		templateUrl: 'templates/meetups/sep2013.html',
		controller: 'MeetupController'
	});
	$routeProvider.when('/chat', {
		templateUrl: 'templates/chat.html',
		controller: 'MeetupController'
	});
	/*
	$routeProvider.when('/login', {
		templateUrl: 'tmpl/login.html',
		controller: 'LoginController'
	});
	$routeProvider.when('/signup', {
		templateUrl: 'tmpl/signup.html',
		controller: 'SignupController'
	});	

	$routeProvider.when('/team', {
		templateUrl: 'tmpl/team.html',
		controller: 'TeamController'
	});
	$routeProvider.when('/news', {
		templateUrl: 'tmpl/news.html',
		controller: 'NewsController'
	});

	$routeProvider.when('/learn', {
		templateUrl: 'tmpl/learn.html',
		controller: 'LearnController'
	});
	$routeProvider.when('/tweets', {
		templateUrl: 'tmpl/tweets.html',
		controller: 'TweetsController'
	});*/

	$routeProvider.otherwise({ redirectTo: '/'});
});


// CONTROLLERS

noogajs.controller('HomeController', function() {
	//console.log('HomeController Fired');

});
noogajs.controller('AboutController', function() {
	//console.log('AboutController Fired');
});
noogajs.controller('LearnController', function() {
	//console.log('LearnController Fired');
});
noogajs.controller('MeetupController', function() {
	//console.log('MeetupController Fired');
});
/*noogajs.controller('ChatController', function() {
	console.log('ChatController Fired');
});*/
/*
noogajs.controller('LoginController', function() {
	console.log('LoginController Fired');
});

noogajs.controller('SignupController', function() {
	console.log('SignupController Fired');
});



noogajs.controller('TeamController', function() {
	console.log('TeamController Fired');
});

noogajs.controller('NewsController', function() {
	console.log('NewsController Fired');
});



noogajs.controller('LearnController', function() {
	console.log('LearnController Fired');
});

noogajs.controller('TweetsController', function() {
	console.log('TweetsController Fired');
});
*/
