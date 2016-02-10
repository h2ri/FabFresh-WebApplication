'use strict';


routerApp
  .controller('logoutCTRL', function( $rootScope,$state,$cookieStore) {
  				$cookieStore.put('count',null);
  				$rootScope.otp_flag = 0;
  				$state.go('login');
  	/*	var user = $cookieStore.get('key');
  		console.log(typeof(user));
  		console.log(user);
  		$cookieStore.put('key',null);
  		$rootScope.otp_flag=0;
  		$state.go('login');




  		/*
  		var user = $cookieStore.get('key');
  		console.log(typeof(user));
  		console.log(user);
  		if(user != null)
  			console.log("not null");
  		var user = $cookieStore.put('key',null);
  		console.log(typeof(user));
  		console.log(user);
  		if(user == null)
  			console.log("null"); */
});

