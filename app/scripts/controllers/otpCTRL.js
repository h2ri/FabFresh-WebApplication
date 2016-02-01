'use strict';

routerApp
  .controller('otpCTRL', function($rootScope, $scope, $http) {
    $scope.user = [];
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
    $scope.submitForm = function() {
    $http({
      method  : 'GET',
      url     : URL+'/users/otp/',
      params : {otp: $scope.otp},
      headers : {'Authorization': 'Bearer '+$rootScope.access_token} 
     })
      .success(function(data) {
        if (data.errors) {
          alert("Some error occured");
        } else {
          alert("Successfully Verified");
          $scope = data;
        }
      });
    };      
});