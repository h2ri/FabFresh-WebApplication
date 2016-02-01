'use strict';


angular.module('routerApp')
  .controller('sign_upCTRL', function($scope, $http) {
    $scope.user = [];
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
        $scope.submitForm = function() {
          
          $scope.user = {
            "username": $scope.sign_up.name,
            "password": $scope.sign_up.password,
            "email": $scope.sign_up.email,
            "phone": $scope.sign_up.phone
          };
        $http({
          method  : 'POST',
          url     : URL+'/users/sign_up/',
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
              alert("Successfully Signed Up");
              $scope.message = data.message;
            }
          });
        };
});