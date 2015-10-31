var mainApp = angular.module("mainApp", ['ngRoute']);
 
mainApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            // controller: 'ctrl'
        })
        .when('/about', {
            templateUrl:'about.html',
        })
        .when('/projects', {
            templateUrl: 'projects.html',
        })
        .when('/contact', {
            templateUrl: 'contact.html',
        })
        // .when('/projects/cachinginspark', {
        //     templateUrl: 'project-caching-spark.html'
        // })
        // .when('/projects/digitrecognition', {
        //     templateUrl: 'digit-recognition.html'
        // })
        // .when('/projects/pinkthink', {
        //     templateUrl: 'pinkthink.html'
        // })
        .otherwise({
            redirectTo: '/'
        });
});
