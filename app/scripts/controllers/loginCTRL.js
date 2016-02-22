'use strict';


routerApp
  .controller('loginCTRL', function($window, $rootScope,$scope, $http, $state, $cookies,task) {
  $scope.$on('LOAD', function() {
        $scope.loading = true
      });
      $scope.$on('UNLOAD', function() {
        $scope.loading = false
      });

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

      var us = $scope.user;
      task.login1(us)                 //call to service
      .then(function(data){
        $scope.$emit('UNLOAD');
        if(data.status=="Not Authenticated"){
            alert("Either email or password is wrong");
          } else {
        $cookies.put('key',data.access_token, {'expires': expireDate});
         $cookies.put('key1',data.access_token, {'expires': expireDate});
       console.log($cookies.get('key'));   
                  // testing
         
          task.login2()                       // call to service 
          .then(function(data){
            if(data[0].UserInfo.flag){
                console.log(data[0]);  
                $rootScope.u_name=data[0].username;               // everything about user ,console
                    $rootScope.otp_flag=1;
                  $state.go('homepage');
              }
              else
                $state.go('otp');
          },function(error){
            alert("Some error occured");
          })
          
        }

      },function(error){
        alert('Some error occured');
      })
}
});