'use strict';


routerApp
  .controller('reset_passwordCTRL', function($scope, $http,service,$state) {
    $scope.user = [];
    var URL = 'http://fabfresh.elasticbeanstalk.com';
    $scope.submitForm = function() {
      $scope.user = {
        "email": $scope.reset_password.email
      };
      service.reset($scope.user)
        .then(function(response){
          console.log(response);
        },function(error){
          window.alert(error);
          setTimeout(function() {
            $state.go('login');
          }, 100);
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