'use strict';


routerApp
  .controller('loginCTRL', function($window, $rootScope,$scope, $http, $state) {
    $scope.user = [];
    
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
    $scope.submitForm = function() {
      $scope.user = {
        "username": $scope.login.email,
        "password": $scope.login.password
      };
    $http({
      method  : 'POST',
      url     : URL+'/users/login/',
      data    : $scope.user,
      headers : {'Content-Type': 'application/json'} 
     })
      .success(function(data) {
        if (data.errors) {
          alert("Some error occured");
        }
        else if(data.status=="Not Authenticated"){
            alert("Either email or password is wrong");
        }

        else {
          alert("Successfully Logged in");
          $rootScope = data;
          //$state.go('homepage');
          $window.location.href = '/homepage.html';
          $scope = data;
        }
      });
    };
});



