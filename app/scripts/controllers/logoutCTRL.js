'use strict';


routerApp
  .controller('logoutCTRL', function( $rootScope,$state,$cookieStore) {
  			 if($cookieStore.get('key') == null)
            {
              $state.go('home');
              alert("Please log in to continue");
            }
          
  				 $cookieStore.put('key',null);
          $rootScope.otp_flag = 0;
  
});

