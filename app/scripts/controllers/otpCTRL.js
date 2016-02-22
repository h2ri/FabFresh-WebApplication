'use strict';

routerApp
  .controller('otpCTRL', function($rootScope, $scope, $http, $state,$cookies,task) {
    $scope.user = [];
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
    
        $scope.otpResend = function(){
            task.getOtpResend()
            .then(function(response){
              alert("OTP has been resent");
            },function(error){
              alert("some error occured");
            })
        };

        $scope.submitForm = function(){
             var x=$scope.otp;
                task.subForm(x)
                .then(function(response){
                if(response.Status == "Verified"){
                alert("Successfully Verified");
                $rootScope.otp_flag = 1;
                $state.go("homepage");
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