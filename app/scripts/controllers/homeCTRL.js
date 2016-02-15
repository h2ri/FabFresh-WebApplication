'use strict';


routerApp
  .controller('homeCTRL', function($rootScope,$scope,$state,$cookies) {
          var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1);

  		
         if(angular.isUndefined($cookies.get('cstate')) || $cookies.get('cstate') == null)
          $rootScope.otp_flag=0;
        
          $rootScope.previousState;
      $rootScope.currentState;
  $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
    $rootScope.previousState = from.name;
    $rootScope.currentState = to.name;
    console.log('Previous state:'+$rootScope.previousState)
    console.log('Current state:'+$rootScope.currentState)
    $cookies.put('cstate',$rootScope.currentState,{'expires': expireDate});
    console.log($cookies.get('key')); 
    console.log($cookies.get('cstate'));

   
    
   
});

if($cookies.get('cstate') != null)
{
  $state.go($cookies.get('cstate'));
  if($cookies.get('key') == null)
  $rootScope.otp_flag=0;
  else  
  $rootScope.otp_flag=1;
}
else
$rootScope.otp_flag=0;
  			

});

