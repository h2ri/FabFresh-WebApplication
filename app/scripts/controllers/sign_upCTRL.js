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

           $cookies.put('key',data.access_token);
           console.log($cookies.get('key'));
            alert("Successfully Signed up");
            $state.go('otp');
          }

      },function(error){
        alert("error");
      })
    };
});
