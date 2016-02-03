'use strict';

var mainApp = angular.module('mainApp', [
    'ui.router',
    ]);

mainApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('address', {
            url: '/#',
            templateUrl: '../address.html',
            //controller:

})
    });