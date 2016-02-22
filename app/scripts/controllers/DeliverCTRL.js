'use strict';


routerApp
 .controller('DeliverCTRL', function($window,$cookies, $rootScope,$scope, $http, $state) {
   var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
   $http({
     method  : 'GET',
     url     : URL+'/v1/placeorder/address/'+$scope.id+'/order/'+$rootScope.order_id+'/',
     params  :{type: $scope.stype},
     headers : {'Authorization': 'Bearer '+$cookies.get('key')} 
    })
    .success(function(data) {
        if (data.errors) {
          alert("Some error occured");
        } 
        else {
          console.log(data);
            alert("Successfully Placedorder");
           
        }
    });
 

});


 