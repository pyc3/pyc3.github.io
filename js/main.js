var mainApp = angular.module("mainApp", ['ngRoute']);
 
mainApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            // controller: 'ctrl'
        })
        .when('/about', {
            templateUrl:'pages/about.html',
        })
        .when('/projects', {
            templateUrl: 'pages/projects.html',
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
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
