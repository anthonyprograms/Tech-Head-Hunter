angular.module('app')
.config(function ($routeProvider) {
    $routeProvider
    .when('/', { controller: 'ScoresCtrl', templateUrl: 'scores.html' })
    .when('/register', {controller: 'RegisterCtrl', templateUrl: 'register.html' })
    .when('/login', {controller: 'LoginCtrl', templateUrl: 'login.html' })
    .when('/play', {controller: 'PlayCtrl', templateUrl: 'game.html' })
    .when('/profile', {controller: 'ProfileCtrl', templateUrl: 'profile.html' })
})
