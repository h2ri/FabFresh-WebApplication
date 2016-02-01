'use strict';


routerApp
  .controller('loginCTRL', function($scope, $http, $state) {
    $scope.user = [];
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
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
        } else {
          alert("Successfully Logged in");
          $scope = data;
            
        }
      });
    };
});