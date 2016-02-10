'use strict';


routerApp
  .controller('AboutCTRL', function($rootScope,$scope,$cookieStore) {
  			$rootScope.otp_flag=1;
  			 $cookieStore.put('count',2);



});

