'use strict';


routerApp
  .controller('loginCTRL', function($window, $rootScope,$scope, $http, $state, $cookieStore) {

    
    $scope.user = [];
   
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com';
       $scope.submitForm = function() {
      $scope.user = {
        "username": $scope.login.email,
        "password": $scope.login.password
      };

    $http({
      method  : 'POST',
      url     : URL+'/users/login/',
      data    : $scope.user,
      headers : {'Content-Type': 'application/json'} 
     })
      .success(function(data) {
        if (data.errors) {
          alert("Some error occured");
        }
        else if(data.status=="Not Authenticated"){
            alert("Either email or password is wrong");
        }
       
        else {
//$rootScope.access_token = data.access_token;
        $cookieStore.put('key',data.access_token);
        console.log(typeof($cookieStore.get('key')));     // testing
        console.log($cookieStore.get('key'));             // testing
         
        $http({
          method  : 'GET',
          url     : URL+'/users/info/',
          headers : {'Authorization': 'Bearer '+$cookieStore.get('key')} 
         })
          .success(function(data) {
            if (data.errors) {
              alert("Some error occured");
            }
            else {
              if(data[0].UserInfo.flag){
                console.log(data[0]);                 // everything about user ,console
                    $rootScope.otp_flag=1;
                  $state.go('homepage');
                  
              }
              else
                $state.go('otp');
            }
          });
        }
      });
    };
    


});