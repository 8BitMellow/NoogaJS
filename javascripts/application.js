// Create Base noogaJS Firebase Reference
var noogajsRef = new Firebase('https://noogajsorg.firebaseio.com/');

// Create Chat noogaJS Firebase Reference
var noogajsChatRef = new Firebase('https://noogajsorg.firebaseio.com/chat');

// Create user object reference 
var noogan = null;

var auth = new FirebaseSimpleLogin(noogajsRef, function(error, user) {
	if (user) {
        noogan = user;
        $('#loginDiv').html("Logged in as <br/><a target='_blank' href='http://twitter.com/" + noogan.username + "'>" + noogan.username + "</a> &nbsp;&nbsp<img style='height=24px; width:24px;' src='" + noogan.profile_image_url + "'>");
	}
});

// Login Function Using Simple Login for Twitter
function onLoginButtonClicked() {  
    auth.login('twitter');
};


var noogajs = angular.module('noogajs', [ 'firebase' ]).config(function($routeProvider) {
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
	$routeProvider.when('/meetups/sep', {
		templateUrl: 'templates/meetups/sep.html',
		controller: 'MeetupController'
	});
	$routeProvider.when('/meetups/oct', {
		templateUrl: 'templates/meetups/oct.html',
		controller: 'MeetupController'
	});
	$routeProvider.when('/meetups/nov', {
		templateUrl: 'templates/meetups/nov.html',
		controller: 'MeetupController'
	});
	$routeProvider.when('/meetups/dec', {
		templateUrl: 'templates/meetups/dec.html',
		controller: 'MeetupController'
	});
	$routeProvider.when('/chat', {
		templateUrl: 'templates/chat.html',
		controller: 'ChatController'
	});
	$routeProvider.when('/contact', {
		templateUrl: 'templates/contact.html',
		controller: 'ContactController'
	});
	$routeProvider.when('/thanks', {
		templateUrl: 'templates/thanks.html',
		controller: 'ThanksController'
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

noogajs.controller('ChatController', ['$scope', 'angularFire', function($scope, angularFire) {
      angularFire(noogajsChatRef.limit(10), $scope, "messages", {});
      $scope.username = noogan.username;
      $scope.thumb = noogan.profile_image_url;
      $scope.addMessage = function() {
        $scope.messages[noogajsChatRef.push().name()] = {
          profile: $scope.thumb, 
          from: $scope.username, 
          content: $scope.message
        };
        //$('#messages').animate({"scrollTop": $('#messages')[0].scrollHeight}, "fast");
      $scope.message = "";
}}]);

noogajs.controller('ContactController', function() {
	//console.log('ContactController Fired');
});
noogajs.controller('ThanksController', function() {
	//console.log('ContactController Fired');
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
