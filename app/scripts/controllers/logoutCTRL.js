'use strict';


routerApp
  .controller('logoutCTRL', function( $rootScope,$state,$cookies) {
  			 if($cookies.get('key')== undefined)
            {
              $state.go('home');
              alert("Please log in to continue");
            }else
        {
        	 $cookies.remove('key');
        	 $cookies.remove('cstate');
           console.log($cookies.get('key'));
            console.log($cookies.get('cstate'));
          $rootScope.otp_flag = 0;
        }  
  		
  
});

