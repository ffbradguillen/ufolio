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
            controller: 'registerController',
            controllerAs: 'register',
            templateUrl: 'Views/register.html',
            caseInsensitiveMatch: true
        })
        .when('/login',{
            controller: 'loginController',
            controllerAs: 'login',
            templateUrl: 'Views/login.html',
            caseInsensitiveMatch: true
        })
        .when('/contact',{
            controller: 'contactController',
            controllerAs: 'contact',
            templateUrl: 'Views/contact.html',
            caseInsensitiveMatch: true
        })
        .when('/membership',{
            controller: 'membershipController',
            controllerAs: 'membership',
            templateUrl: 'Views/membership.html',
            caseInsensitiveMatch: true
        })
        .when('/shop',{
            controller: 'shopController',
            controllerAs: 'shop',
            templateUrl: 'Views/shop.html',
            caseInsensitiveMatch: true
        })
        .otherwise('/');
});