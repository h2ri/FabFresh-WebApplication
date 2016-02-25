'use strict';

routerApp
  .controller('otpCTRL', function($localStorage,$rootScope, $scope, $http, $state,$cookies,service) {
    $scope.user = [];
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
    
        $scope.otpResend = function(){
            service.otpResend()
            .then(function(response){
              alert("OTP has been resent");
            },function(error){
              alert("some error occured");
            })
        };

        $scope.submitForm = function(){
             var x=$scope.otp;
                service.checkOtp(x)
                .then(function(response){
                if(response.Status == "Verified"){
                    alert("Successfully Verified");
                    $cookies.put('otp_flag',1);
                    $localStorage.homeState = 'address';
                    $state.go("address");
                }
                else{
                    alert("you have entered the wrong OTP");
                    $state.go('otp');
                    }
                },function(error){
                alert("some error occured");
        })
    };


});