'use strict';


routerApp
  .controller('homeCTRL', function($rootScope,$scope,$state,$cookies) {
         
          var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1);

  		
         if(angular.isUndefined($cookies.get('cstate')))
          $rootScope.otp_flag=0;
        
          $rootScope.previousState;
      $rootScope.currentState;
  $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
    $rootScope.previousState = from.name;
    $rootScope.currentState = to.name;
    
    $cookies.put('cstate',$rootScope.currentState,{'expires': expireDate});
    
   
    
   
});

if($cookies.get('cstate') != undefined)
{
  $state.go($cookies.get('cstate'));
  if($cookies.get('key') == undefined)
  $rootScope.otp_flag=0;
  else  
  $rootScope.otp_flag=1;
}
else
$rootScope.otp_flag=0;
  			

});

