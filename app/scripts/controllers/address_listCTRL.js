'use strict';


routerApp
 .controller('address_listCTRL', function($window,$cookies, $rootScope,$scope, $http, $state,Pagination) {
   $scope.user = [];
   var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
   $http({
     method  : 'GET',
     url     : URL+'/users/address/',
     headers : {'Authorization': 'Bearer '+$cookies.get('key')} 
    })
     .success(function(data) {
       if (data.errors) {
         alert("Some error occured");
       }
       else {
         $scope.data=data;
         $scope.l = data.length;
         console.log($scope.l);
         $scope.currentPage = 0;
         $scope.pagination = Pagination.getNew(2);
       }
     });

   $scope.check_couponvalidity = function() {
     //alert($scope.coupon);
     $scope.user = {
       "couponTag": $scope.coupon
     };
   $http({
     method  : 'POST',
     url     : URL+'/couponsvalididty/',
     data : $scope.user,
     headers : {'Authorization': 'Bearer '+$cookies.get('key'), 'Content-Type': 'application/json'} 
    })
     .success(function(data) {
       if (data.errors) {
         alert("Some error occured");
       } 
       else {
         //alert(data.status);
         if(data.status=="Invalid Coupon") {
           $scope.isvalid=data.status;
         }
         else{
          $scope.isvalid="Coupon Valid";
         }
       }
     });
   };
 
 

  $scope.placeorderForm = function() {
     //alert($scope.coupon);

     //console.log($rootScope.userid);
     //alert($scope.sp_request);
     //alert("user_id: "+$rootScope.userid+"address_id: "+$scope.id+"service_type: "+$scope.stype);
   $http({
     method  : 'GET',
     url     : URL+'/v1/placeorder/address/'+$scope.id+'/order/'+"0"+'/',
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
            $state.go('orders');
        }
    });
  };

});


 