'use strict';


routerApp
 .controller('place_orderCTRL', function($localStorage,$window,$cookies, $rootScope,$scope, $http, $state,Pagination,service) {
     if(angular.isUndefined($cookies.get('otp_flag'))){
        $state.go('login');
        alert("Please log in to continue");
        return;
      }
      if(angular.isUndefined($rootScope.type) || $localStorage.previousState!='select_service'){
        $state.go('select_service');
        return;
      }
      
      service.getAddress()
        .then(function(response){
          $scope.currentPage=0;
          $scope.data=response;
          $scope.l = $scope.data.length;
          $scope.pagination = Pagination.getNew(2);
        },function(error){
          alert("some error occured");
        })
      $scope.goToAddress = function(){
        service.place=1;
        service.type=$scope.type;
        $state.go('address');
      };


      $scope.checkCouponValidity = function(){
      var x = {
        "couponTag": $scope.coupon
      };
      service.checkCouponValidity(x)
        .then(function(response){
          alert(response.status);
          if(response.status == 'Invalid Coupon'){
            $scope.isvalid = response.status;
          }else{
            $scope.isvalid='Coupon Valid';
          }
        },function(error){
            alert("some error occured");
      })
    };
 
  $scope.placeOrderForm = function(t) {
    console.log($scope.data[t].id);
     service.placeOrder($scope,$scope.data[t].id)
        .then(function(response){
          if(response.status=='Time Up'){
            alert("Order cannot be placed right now");
          }
          else{
            alert("Order placed Successfully");
            $state.go("orders");
          }
          
        },function(error){
            alert("some error occured");
      })
  };
});


 