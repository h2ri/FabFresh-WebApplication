'use strict';

var routerApp = angular.module('routerApp', [
    'ui.router',
    'ngCookies',
    'simplePagination',
    'ngStorage',
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
            url: '/reset-password',
            templateUrl: '../views/reset_password.html',
            controller: 'reset_passwordCTRL'
        })
        .state('otp', {
            url: '/#',
            templateUrl: '../views/otp.html',
            controller: 'otpCTRL'
        })
        .state('address', {
            url: '/add-address',
            templateUrl: '../views/address.html',
            controller: 'addressCTRL',
            authenticate: 'true',
        })
        .state('orders', {
            url: '/orders',
            templateUrl: '../views/orders.html',
            controller: 'ordersCTRL',
        })
        .state('place_order', {
            url: '/place-order',
            templateUrl: '../views/place_order.html',
            controller: 'place_orderCTRL',
        })
        .state('track_order', {
            url: '/track-order',
            templateUrl: '../views/track.html',
            controller: 'trackCTRL',
        })
        .state('profiles', {
            url: '/about-us',
            templateUrl: '../views/profile.html',
            //controller: 'profileCTRL',
        })
         .state('logout', {
            url: '/#',
            templateUrl: '../views/logout.html',
            //template: '<h1>BYE<h1>',
            controller: 'logoutCTRL',
        })
        
         .state('deliver', {
            url: '/deliver-now',
            templateUrl: '../views/deliver.html',
            controller: 'deliverCTRL',
        })
});
/*
routerApp.factory('UserService', function() {
    return {
        name : ''
    };
});*/   
