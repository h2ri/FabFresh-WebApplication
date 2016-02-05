'use strict';


routerApp
  .controller('homeCTRL', function($rootScope,$scope) {
    $scope.sub = function() {
    	//alert($rootScope.access_token);
       return $rootScope.access_token && !$rootScope.user_status;
    };
});

