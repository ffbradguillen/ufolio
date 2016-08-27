'use strict';

var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/',{
            controller: 'homeController',
            controllerAs: 'home',
            templateUrl: 'Views/home.html',
            caseInsensitiveMatch: true
        })
        .when('/userProfile',{
            controller: 'userProfileController',
            controllerAs: 'userProfile',
            templateUrl: 'Views/userProfile.html',
            caseInsensitiveMatch: true
        })
        .when('/registerUser',{
            controller: 'registerUserController',
            controllerAs: 'registerUser',
            templateUrl: 'Views/registerUser.html',
            caseInsensitiveMatch: true
        })
        .when('/div3',{
            controller: 'div3Controller',
            controllerAs: 'div3',
            templateUrl: 'Views/div3.html',
            caseInsensitiveMatch: true
        })
        .otherwise('/');
});