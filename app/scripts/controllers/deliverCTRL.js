'use strict';


routerApp
  .controller('address_listCTRL', function($window,$cookies, $rootScope,$scope, $http, $state,Pagination,service) {
     if($cookies.get('key') == undefined){
        $state.go('home');
        alert("Please log in to continue");
      }

    service.getOrder($rootScope.order_id)
      .then(function(response){
          $scope.order=response;
      },function(error){
          alert("some error occured");
        })


    $scope.getAddress = function(){
      service.getAddress()
        .then(function(response){
          $scope.data=response;
          $scope.l = $scope.data.length;
          $scope.currentPage = 0;
          $scope.pagination = Pagination.getNew(2);
        },function(error){
          alert("some error occured");
        })
      };
      $scope.getAddress();

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


    $scope.deliverNow = function(x) {
      alert(x);
     service.deliverNow($scope.data[x],$scope.order)
        .then(function(response){
          alert("Your order will be dilevered very soon.");
        },function(error){
            alert("some error occured");
      })
    };

});


 