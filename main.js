var mainApp = angular.module("mainApp", ['ngRoute']);
 
mainApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            // controller: 'ctrl'
        })
        .when('/about', {
            templateUrl:'about.html',
            // controller: 'ctrl'
        })
        .when('/projects', {
            templateUrl: 'projects.html',
            // controller: 'ctrl'
        })
        .when('/contact', {
            templateUrl: 'contact.html',
            // controller: 'ctrl'
        })
        .when('/projects/cachinginspark', {
            templateUrl: 'project-caching-spark.html'
            // controller: 'ctrl' 
        })
        .when('/projects/digitrecognition', {
            templateUrl: 'digit-recognition.html'
            // controller: 'ctrl' 
        })
        .when('/projects/pinkthink', {
            templateUrl: 'pinkthink.html'
            // controller: 'ctrl' 
        })
        .otherwise({
            redirectTo: '/'
        });
});
