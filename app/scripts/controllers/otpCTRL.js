'use strict';

routerApp
  .controller('otpCTRL', function($rootScope, $scope, $http, $state,$cookies) {
    $scope.user = [];
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
    $scope.otpResend = function() {
    $http({
      method  : 'GET',
      url     : URL+'/users/otpresend/',
      headers : {'Authorization': 'Bearer '+$cookies.get('key')} 
     })
      .success(function(data) {
        if (data.errors) {
          alert("Some error occured");

        } else {
          alert("OTP has been resent");
        }
      });
    }; 


    $scope.submitForm = function() {
    $http({
      method  : 'GET',
      url     : URL+'/users/otp/',
      params : {otp: $scope.otp},
      headers : {'Authorization': 'Bearer '+$cookies.get('key')} 
     })
      .success(function(data) {
        if (data.errors) {
          alert("Some error occured");
        } else {
          if(data.Status=="Verified"){
            alert("Successfully Verified");
            $rootScope.otp_flag=1;
            $state.go("homepage");
          }
          else{
            alert("You entered wrong OTP");
            $state.go('otp');
          }
        }
      });
    };   


});