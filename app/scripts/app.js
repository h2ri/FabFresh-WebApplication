'use strict';

/**
 * @ngdoc overview
 * @name gauravApp
 * @description
 * # gauravApp
 *
 * Main module of the application.
angular
  .module('gauravApp', [
    'ngResource'
  ]);
*/
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: '/#',
            templateUrl: '../views/login.html'
        })
        
        .state('homepage', {
            url: '',
            templateUrl: '..views/homepage.html'
        })
         // nested list with custom controller
        .state('sign-up', {
            url: '/#',
            templateUrl: '../views/sign-up.html',
        })

        .state('forgot-password', {
            url: '/#',
            templateUrl: '../views/forgot-password.html',
        })
        .state('reset-password', {
            url: '/resetpassword',
            templateUrl: '../views/reset-password.html',
        })
        // nested list with just some random string data
});