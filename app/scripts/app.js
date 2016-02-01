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
var routerApp = angular.module('routerApp', [
    'ui.router',
    //'Login.services'
    ]);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        .state('login', {
            url: '/#',
            templateUrl: '../views/login.html',
            controller: 'loginCTRL'
        })
        
        .state('sign_up', {
            url: '/#',
            templateUrl: '../views/sign_up.html',
            controller: 'sign_upCTRL'
        })

        .state('forgot_password', {
            url: '/#',
            templateUrl: '../views/forgot_password.html',
        })
        .state('reset_password', {
            url: '/reset_password',
            templateUrl: '../views/reset_password.html',
        })
        // nested list with just some random string data
});