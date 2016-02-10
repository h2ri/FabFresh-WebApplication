'use strict';

var routerApp = angular.module('routerApp', [
    'ui.router',
    'ngCookies'
    ]);
 
routerApp.config(function($stateProvider, $urlRouterProvider ) {
    
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        
        .state('login', {
            url: '/#',
            templateUrl: '../views/login.html',
            controller: 'loginCTRL',
        })
        
        .state('sign_up', {
            url: '/#',
            templateUrl: '../views/sign_up.html',
            controller: 'sign_upCTRL'
        })

        .state('reset_password', {
            url: '/#',
            templateUrl: '../views/reset_password.html',
            controller: 'reset_passwordCTRL'
        })
        .state('otp', {
            url: '/#',
            templateUrl: '../views/otp.html',
            controller: 'otpCTRL'
        })
        .state('homepage', {
            url: '/#',
            templateUrl: '../views/homepage.html',
            controller: 'homepageCTRL',
        })
        .state('orders', {
            url: '/#',
            templateUrl: '../views/orders.html',
            controller: 'ordersCTRL',
        })
        .state('address_list', {
            url: '/#',
            templateUrl: '../views/address_list.html',
            controller: 'address_listCTRL',
        })
         .state('Logout', {
            url: '/#',
            template: '<h1>BYE<h1>',
            controller: 'logoutCTRL',
        })
         .state('About', {
            url: '/#',
            template: '<h1>yoyoyoyoyooy<h1>',
            controller: 'AboutCTRL',
        })
        


});
/*
routerApp.factory('UserService', function() {
    return {
        name : ''
    };
});*/