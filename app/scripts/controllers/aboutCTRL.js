'use strict';


routerApp
  .controller('AboutCTRL', function($rootScope,$scope,$cookieStore) {

  			 if($cookieStore.get('key') == null)
            {
              $state.go('home');
              alert("Please log in to continue");
            }
          
  			$rootScope.otp_flag=1;
  			



});

