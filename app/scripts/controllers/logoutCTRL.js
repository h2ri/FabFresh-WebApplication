'use strict';


routerApp
  .controller('logoutCTRL', function( $rootScope,$state,$cookies) {
  			 if($cookies.get('key') == null)
            {
              $state.go('home');
              alert("Please log in to continue");
            }else
        {
        	 $cookies.put('key',null);
        	 $cookies.put('cstate',null);
          $rootScope.otp_flag = 0;
        }  
  		
  
});

