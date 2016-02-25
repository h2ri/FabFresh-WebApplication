'use strict';


routerApp
  .controller('homeCTRL', function($localStorage, $rootScope,$scope,$state,$cookies) {
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1);
    if(angular.isUndefined($cookies.get('cstate')))
      $rootScope.otp_flag=0;
        
    $rootScope.previousState;
    $rootScope.currentState;
    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
      $( '.mdl-layout__drawer, .mdl-layout__obfuscator' ).removeClass( 'is-visible' );
      $localStorage.previousState = from.name;
      $localStorage.currentState = to.name;
      $cookies.put('cstate',$localStorage.currentState,{'expires': expireDate});
  });
  //console.log($localStorage.previousState);
  //console.log($localStorage.currentState);
  
  if($cookies.get('cstate') != undefined && $cookies.get('cstate') != 'login' && $cookies.get('cstate') != 'reset_password'){
    $state.go($cookies.get('cstate'));
    if($cookies.get('key') == undefined)
    $rootScope.otp_flag=0;
    else  
    $rootScope.otp_flag=1;
  }
  else
    $rootScope.otp_flag=0;
});

