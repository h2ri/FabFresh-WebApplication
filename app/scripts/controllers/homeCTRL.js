'use strict';


routerApp
  .controller('homeCTRL', function($rootScope,$scope,$cookieStore,$state) {
          

  		
         if(angular.isUndefined($cookieStore.get('cstate')) || $cookieStore.get('cstate') == null)
          $rootScope.otp_flag=0;
        
          $rootScope.previousState;
      $rootScope.currentState;
  $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
    $rootScope.previousState = from.name;
    $rootScope.currentState = to.name;
    console.log('Previous state:'+$rootScope.previousState)
    console.log('Current state:'+$rootScope.currentState)
    $cookieStore.put('cstate',$rootScope.currentState);
    console.log($cookieStore.get('key'));
    console.log($cookieStore.get('cstate'));
   
    
   
});

if($cookieStore.get('cstate') != null)
{
  $state.go($cookieStore.get('cstate'));
  if($cookieStore.get('key') == null)
  $rootScope.otp_flag=0;
  else  
  $rootScope.otp_flag=1;
}
else
$rootScope.otp_flag=0;
  			

});

