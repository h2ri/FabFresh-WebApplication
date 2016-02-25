'use strict';


routerApp
  .controller('deliverCTRL', function($localStorage,$window,$cookies, $rootScope,$scope, $http, $state,Pagination,service) {
    
     if(angular.isUndefined($cookies.get('otp_flag'))){
        $state.go('login');
        return;
      }
       if( service.deliver!=2 && $localStorage.previousState!='track_order' && $localStorage.previousState!=''){
        $state.go('orders');
        return;
      }
      if(service.deliver==2 || service.deliver==1)
        service.deliver=0;


    service.getOrder($localStorage.order_id)
      .then(function(response){
          $scope.order=response;
      },function(error){
          alert("some error occured");
        })

      $scope.goToAddress = function(){
        service.deliver=1;
        $state.go('address');
      };

      service.getAddress()
        .then(function(response){
          $scope.data=response;
          $scope.l = $scope.data.length;
          $scope.currentPage = 0;
          $scope.pagination = Pagination.getNew(2);
        },function(error){
          alert("some error occured");
        })

      $scope.applyCoupon = function(){
        var x = {
          "orderid": $scope.order.id,
          "couponTag": $scope.coupon
        };
        service.applyCoupon(x)
          .then(function(response){
            alert(response.status);
            if(response.status == 'Invalid Coupon')
              $scope.isvalid = response.status;
            else
              $scope.isvalid='Coupon Valid';
            service.getOrder($localStorage.order_id)
              .then(function(response){
                  $scope.order=response;
              },function(error){
                  alert("some error occured");
                })
          },function(error){
              alert("some error occured");
        })
      };


    $scope.deliverNow = function(x) {
      service.deliverNow($scope.data[x],$scope.order)
        .then(function(response){
          alert("Your order will be delivered very soon.");
        },function(error){
            alert("some error occured");
      })
    };
});


 