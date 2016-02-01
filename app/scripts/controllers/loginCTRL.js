'use strict';


angular.module('routerApp')
  .controller('loginCTRL', function($scope, $http) {
    $scope.user = [];
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
      // calling our submit function.
        $scope.submitForm = function() {
          $scope.user = {
            "username": $scope.login.email,
            "password": $scope.login.password
          };
          //alert("Calling Submit Form");
        // Posting data to php file
        $http({
          method  : 'POST',
          url     : URL+'/users/login/',
          data    : $scope.user, //forms user object
          headers : {'Content-Type': 'application/json'} 
         })
          .success(function(data) {
            if (data.errors) {
              // Showing errors.
              alert("This is an error");
              //$scope.errorName = data.errors.name;
              //$scope.errorUserName = data.errors.username;
              //$scope.errorEmail = data.errors.email;
            } else {
              alert("Successfully Logged in");
              $scope.message = data.message;
            }
          });
        };
});