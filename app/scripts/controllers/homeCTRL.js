'use strict';


routerApp
  .controller('homeCTRL', function($rootScope,$scope,$cookieStore,$state) {
  			

  			var c = $cookieStore.get('count');
  			if(c == 2)
  			{
  				$state.go('About');
  				$rootScope.otp_flag=1;
  			}
  			else if(c==3)
  			{
  					$state.go('orders');
  					$rootScope.otp_flag=1;
  			}
  			else if(c==1)
  			{
  					$state.go('address_list');
  					$rootScope.otp_flag=1;
  			}
  			else if(c==4)
 			{
  					$state.go('homepage');
  					$rootScope.otp_flag=1;
  			}
  			else
  				$rootScope.otp_flag=0;

  			

});

