'use strict';


routerApp
  .controller('reset_passwordCTRL', function($scope, $http) {
    $scope.user = [];
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com';
    $scope.submitForm = function() {
      $scope.user = {
        "username": $scope.reset_password.email
      };
    $http({
      method  : 'POST',
      url     : URL+'/users/info/reset_password/',
      data    : $scope.user,
      headers : {'Content-Type': 'application/json'} 
     })
      .success(function(data) {
        if (data.errors) {
          alert("Some error occured");
        }
        else {
            alert("An email has been sent to your email id");
        }
      });
    };
});