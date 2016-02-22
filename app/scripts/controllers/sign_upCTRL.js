'use strict';

routerApp
  .controller('sign_upCTRL', function($rootScope, $scope, $http, $state,$cookies,task){
    $scope.user = [];
    $scope.submitForm = function() {
      $scope.user = {
        "password": $scope.sign_up.password,
        "email": $scope.sign_up.email,
        "phone": $scope.sign_up.phone
      };
      var sub = $scope.user;
      task.sign(sub)
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
        alert("Some error occured");
      })
    }
});





/* This directive is used to check, whether confirm_password is equals to the password
routerApp.directive('myDir', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.push(function (viewValue, $scope) {
                var noMatch = viewValue != scope.myForm.sign_up_password.$viewValue
                ctrl.$setValidity('noMatch', !noMatch)
            })
        }
    }
})
*/