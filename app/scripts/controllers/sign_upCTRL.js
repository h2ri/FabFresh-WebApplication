'use strict';

routerApp
  .controller('sign_upCTRL', function($rootScope, $scope, $http, $state) {
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
      data    : $scope.user,
      headers : {'Content-Type': 'application/json'} 
     })
      .success(function(data) {
        if (data.errors) {
          alert("Some Error occured");
        } else {
          $scope = data;
          $rootScope.access_token=$scope.access_token;
          alert("Successfully Signed up");
          $state.go('otp');
        }
      });
    };
});