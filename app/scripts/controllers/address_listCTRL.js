'use strict';


routerApp
  .controller('address_listCTRL', function($window, $rootScope,$scope, $http, $state) {
    $scope.user = [];
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
    $http({
      method  : 'GET',
      url     : URL+'/users/address/',
      headers : {'Authorization': 'Bearer '+$rootScope.access_token} 
     })
      .success(function(data) {
        if (data.errors) {
          alert("Some error occured");
        }
        else {
          $scope.data=data;
        }
      });
});