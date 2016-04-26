'use strict';


routerApp
  .controller('homeCTRL', function($window,service,$localStorage, $rootScope,$scope,$state,$cookies) {
    var expireDate = new Date();
   
    
    expireDate.setDate(expireDate.getDate() + 1);

    if(angular.isDefined($cookies.get('otp_flag')) && $window.location.hash==''){
      service.getAddress()
        .then(function(response){
          if(response.length>0)
            $localStorage.homeState='place_order';
          else
            $localStorage.homeState='address';
          $state.go($localStorage.homeState);
        },function(error){
          alert("some error occured");
        })
    }

    $scope.otp_flag=function(){
      if(angular.isDefined($cookies.get('otp_flag')))
        return true;
      else
        return false;
    }

    $scope.getUsername=function(){
      if(angular.isDefined($cookies.get('otp_flag')))
        return $localStorage.username;
      else
        return "";
    }
        
    $rootScope.previousState;
    $rootScope.currentState;
    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
      $( '.mdl-layout__drawer, .mdl-layout__obfuscator' ).removeClass( 'is-visible' );
      $localStorage.previousState = from.name;
      $localStorage.currentState = to.name;
  });
});

