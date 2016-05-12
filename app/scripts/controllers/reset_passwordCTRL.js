'use strict';


routerApp
  .controller('reset_passwordCTRL', function($scope, $http) {
    $scope.user = [];
    var URL = 'http://fabfresh.elasticbeanstalk.com';
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


   var flag=0;
    $scope.set = function() {
      if(flag)
        return;
      if($scope.reset_password!=undefined && $scope.reset_password.email!=undefined){
        setClass('#Email');
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