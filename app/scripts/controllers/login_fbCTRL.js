'use strict';


routerApp
  .controller('login_fbCTRL', function($rootScope,$scope,$cookies) {
  	console.log("login fb");

  	$rootScope.fbrg = function(){
  FB.getLoginStatus(function(response) {
   console.log(response);
   // if(response.status == "unknown")
    fb();
});
}


   function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me',{fields:'first_name,last_name,email,phone'}, function(response) {
      console.log('Successful login for: ' + response.first_name );
      console.log(response.email);
      
    });
  }

    function fb() {
            FB.login(function (response) {
                console.log(response);
                if (response.authResponse) {
                  var tkk = response.authResponse.accessToken;
                  
                    testAPI();
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            },{scope: 'public_profile,email',
               return_scopes: true,
              
             });
        }

});

