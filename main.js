var mainApp = angular.module("mainApp", ['ngRoute']);
 
mainApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'ctrl'
        })
        .when('/about', {
            templateUrl:'about.html',
            controller: 'ctrl'
        })
        .when('/projects', {
            templateUrl: 'projects.html',
            controller: 'ctrl'
        })
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'ctrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
