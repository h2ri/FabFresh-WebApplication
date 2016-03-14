'use strict';


routerApp
  .controller('logoutCTRL', function( $window,$localStorage,$rootScope,$state,$cookies) {
  	
    localStorage.clear();
    $cookies.remove('token');
    $cookies.remove('otp_flag');
    $rootScope.u_name='';
    $state.go('login');
});

