'use strict';


routerApp
  .controller('reset_passwordCTRL', function($scope, $http,task) {
   
    $scope.submitForm = function() {
      $scope.user = {
        "username": $scope.reset_password.email
      };
          var us = $scope.user;
          task.rep(us)
        .then(function(response){
          alert("An email has been sent to your email id");
        },function(error){
          alert("Some error occured");
        })
      
  }
});