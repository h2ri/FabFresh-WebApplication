'use strict';

routerApp
  .controller('sign_upCTRL', function($rootScope, $scope, $http, $state,service,$cookies){
    $scope.user = [];
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
    $scope.submitForm = function() {
       $scope.user = {
        "password": $scope.sign_up.password,
        "email": $scope.sign_up.email,
        "phone": $scope.sign_up.phone
      };
      service.signUp($scope.user)
      .then(function(data){
         if(data.email){
            alert(data.email);
          }
          else if(data.status){
            alert(data.status);
          }
          else{
            $localStorage.username=$scope.sign_up.email; 
           $cookies.put('token',data.access_token);
            alert("Successfully Signed up");
            $state.go('otp');
          }

      },function(error){
        alert("error");
      })
    };

    var flag=0;
    $scope.set = function() {
      if(flag)
        return;
      if($scope.sign_up!=undefined && $scope.sign_up.password!=undefined){
        setClass('#Email');
        setClass('#mobile');
        setClass('#password');
        flag=1;
      }
    };
      $('.awesome-form .input-group input').focusout(function(){
        var text_val = $(this).val();
        if(text_val === "")
          $(this).removeClass('has-value');
        else {
          $(this).addClass('has-value');
        }
    });
    
});
