'use strict';


routerApp
    .controller('select_serviceCTRL', function($scope, $rootScope, $http,$state) {
        $scope.user = [];
        var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
	        $scope.type=0;
            $scope.goToPlaceOrder = function(x){
                $rootScope.type=x;
                $state.go('place_order');
            };
    });