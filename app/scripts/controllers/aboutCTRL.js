'use strict';


routerApp
  .controller('AboutCTRL', function($rootScope,$scope,$cookies) {

  			 if($cookies.get('key') == null)
            {
              $state.go('home');
              alert("Please log in to continue");
            }
  			$rootScope.otp_flag=1;
});

