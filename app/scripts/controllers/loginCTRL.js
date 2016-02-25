'use strict';


routerApp
  .controller('loginCTRL', function($localStorage,$window, $rootScope,$scope, $http, $state, $cookies,service) {
  document.body.addEventListener('click', boxCloser, true);
  //$state.go($state.current, {}, {reload: true});
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
        service.login1($scope.user)                 //call to service
        .then(function(data){
          $scope.$emit('UNLOAD');
          if(data.status=="Not Authenticated"){
              alert("Either email or password is wrong");
            } else {
            $cookies.put('token',data.access_token, {'expires': expireDate}); 
            
            service.login2()             
            .then(function(data){
              if(data[0].UserInfo.flag){  
                  
                    $cookies.put('otp_flag',1);
                    service.getAddress()
                    .then(function(response){
                        if(response.length>0)
                          $localStorage.homeState = 'place_order';
                        else
                          $localStorage.homeState = 'address';
                        $state.go($localStorage.homeState);
                    })
                }
                else
                  $state.go('otp');
                $localStorage.username=data[0].username; 
            },function(error){
              alert("Some error occured");
            })
            
          }

        },function(error){
          alert('Some error occured');
        })
      };
});