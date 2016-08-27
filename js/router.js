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
        .when('/register',{
            controller: 'registerUserController',
            controllerAs: 'registerUser',
            templateUrl: 'Views/register.html',
            caseInsensitiveMatch: true
        })
        .when('/login',{
            controller: 'loginController',
            controllerAs: 'login',
            templateUrl: 'Views/login.html',
            caseInsensitiveMatch: true
        })
        .otherwise('/');
});