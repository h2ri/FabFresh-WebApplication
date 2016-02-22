'use strict';


routerApp
  .controller('logoutCTRL', function( $rootScope,$state,$cookies) {
  				
  				$rootScope.otp_flag = 0;
  			 if($cookies.get('key')== undefined)
            {
             
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

