'use strict';


routerApp
 .controller('address_listCTRL', function($window,$cookieStore, $rootScope,$scope, $http, $state) {
   $scope.user = [];
   var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
   $http({
     method  : 'GET',
     url     : URL+'/users/address/',
     headers : {'Authorization': 'Bearer '+$cookieStore.get('key')} 
    })
     .success(function(data) {
       if (data.errors) {
         alert("Some error occured");
       }
       else {
         $scope.data=data;
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
     headers : {'Authorization': 'Bearer '+$cookieStore.get('key'), 'Content-Type': 'application/json'} 
    })
     .success(function(data) {
       if (data.errors) {
         alert("Some error occured");
       } else {
         //alert(data.status);
         if(data.status=="Invalid Coupon") {
           $scope.isvalid=data.status;
         }
         else{
           $scope.isvalid="Coupon Applied";
         }
         
       }
     });
   };
 
 

  $scope.placeorderForm = function() {
     //alert($scope.coupon);

     console.log($rootScope.userid);
     alert($scope.sp_request);
     alert("user_id: "+$rootScope.userid+"address_id: "+$scope.id+"service_type: "+$scope.stype);
   $http({
     method  : 'GET',
     url     : URL+'/v1/placeorder/'+$rootScope.userid+'/address/'+$scope.id+'/type/'+$scope.stype+'/',
     params  :{special_request: $scope.sp_request},
     data : $scope.user,
     headers : {'Authorization': 'Bearer '+$cookieStore.get('key'), 'Content-Type': 'application/json'} 
    })
   };

});