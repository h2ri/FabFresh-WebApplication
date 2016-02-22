'use strict';


routerApp
  .controller('loginCTRL', function($window, $rootScope,$scope, $http, $state, $cookies) {
  $scope.$on('LOAD', function() {
        $scope.loading = true
      });
      $scope.$on('UNLOAD', function() {
        $scope.loading = false
      });

    //$scope.$emit('LOAD')
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1);
    $scope.user = [];
   
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com';
       $scope.submitForm = function() {
           $scope.$emit('LOAD');
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
        $scope.$emit('UNLOAD')
        if (data.errors) {
          alert("Some error occured");
        }
        else if(data.status=="Not Authenticated"){
            alert("Either email or password is wrong");
        }
       
        else {
        $cookies.put('key',data.access_token, {'expires': expireDate});
         $cookies.put('key1',data.access_token, {'expires': expireDate});
        console.log(typeof($cookies.get('key')));     // testing
       console.log($cookies.get('key'));   
                  // testing
         
        $http({
          method  : 'GET',
          url     : URL+'/users/info/',
          headers : {'Authorization': 'Bearer '+$cookies.get('key')} 
         })
          .success(function(data) {
            if (data.errors) {
              alert("Some error occured");
            }
            else {
              if(data[0].UserInfo.flag){
                console.log(data[0]);  
                $rootScope.u_name=data[0].username;               // everything about user ,console
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