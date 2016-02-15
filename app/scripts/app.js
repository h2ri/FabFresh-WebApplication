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
            url: '/homepage',
            templateUrl: '../views/homepage.html',
            controller: 'homepageCTRL',
            authenticate: 'true',
        })
        .state('orders', {
            url: '/orders',
            templateUrl: '../views/orders.html',
            controller: 'ordersCTRL',
        })
        .state('address_list', {
            url: '/address',
            templateUrl: '../views/address_list.html',
            controller: 'address_listCTRL',
        })
        .state('place_order', {
            url: '/place_order',
            templateUrl: '../views/place_order.html',
            controller: 'address_listCTRL',
        })
        .state('track_order', {
            url: '/track_order',
            templateUrl: '../views/track.html',
            controller: 'trackCTRL',
        })
        .state('profiles', {
            url: '/#',
            templateUrl: '../views/profile.html',
            //controller: 'profileCTRL',
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

          .state('home', {
            url: '/#',
            
        })
        
});
