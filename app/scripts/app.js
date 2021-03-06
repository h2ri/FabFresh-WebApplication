'use strict';

var routerApp = angular.module('routerApp', [
    'ui.router',
    'ngCookies',
    'simplePagination',
    'ngStorage',
    'satellizer'
    ]);
 
routerApp.config(function($stateProvider, $urlRouterProvider,$authProvider ) {
    
    $urlRouterProvider.otherwise('login');

    $stateProvider
        
        .state('login', {
            url: '/login',
            templateUrl: '../views/login.html',
            controller: 'loginCTRL',
        })
        
        .state('sign_up', {
            url: '/#',
            templateUrl: '../views/sign_up.html',
            controller: 'sign_upCTRL'
        })

        .state('login_fb', {
            url: '/fb_login',
            templateUrl:'../views/loginfb.html',
            controller: 'loginCTRL',
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
        .state('select_service', {
            url: '/select-service',
            templateUrl: '../views/select_service.html',
            controller: 'select_serviceCTRL',
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

         .state('terms', {
            url: '/T&C',
            templateUrl: '../views/terms.html',
        })

         .state('privacy', {
            url: '/privay_policy',
            templateUrl: '../views/privacy.html',
        })

         .state('price', {
            url: '/Price_tags',
            templateUrl: '../views/price.html',
            controller: 'priceCTRL',
        })


         

         window.fbAsyncInit = function() {
    FB.init({
        appId      : '924313314353891',
        cookie :true,
        xfbml      : true,
        version    : 'v2.5'
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

       
});


        
/*
routerApp.factory('UserService', function() {
    return {
        name : ''
    };
});*/   

   // $authProvider.facebook({
   //      clientId: '924313314353891'
        
   //  });
