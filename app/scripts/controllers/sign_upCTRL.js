'use strict';

routerApp
  .controller('sign_upCTRL', function($rootScope, $scope, $http, $state){
    $scope.user = [];
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
    $scope.submitForm = function() {
      $scope.user = {
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
          if(data.email){
            alert(data.email);
          }
          else if(data.status){
            alert(data.status);
          }
          else{

           $cookieStore.put('key',data.access_token);
            alert("Successfully Signed up");
            $state.go('otp');
          }
        }
      });
    };
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