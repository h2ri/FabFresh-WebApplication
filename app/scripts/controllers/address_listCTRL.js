'use strict';


routerApp
 .controller('address_listCTRL', function($window,$cookies, $rootScope,$scope, $http, $state,Pagination,task) {
   $scope.user = [];
   var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
  
      $scope.getAll = function(){
        task.getAllTasks()
        .then(function(response){
           $scope.data=response;
          $scope.l = $scope.data.length;
          console.log($scope.l);
          $scope.currentPage = 0;
        $scope.pagination = Pagination.getNew(2);
        },function(error){
          alert("some error occured");
        })
      }
      $scope.getAll();

   $scope.check_couponvalidity = function(){
    var x = {
        "couponTag": $scope.coupon
      };
    task.checkCV(x)
    .then(function(response){
      if(response.status == 'Invalid Coupon'){
        $scope.isvalid = response.status;
      }else{
        $scope.isvalid='Coupon Valid';
      }
    },function(error){
      alert("some error occured");
    })

   }
 
   $scope.placeorderForm = function() {
      var x = $scope.id;
      var y = $scope.stype;
      task.placeForm(x,y)
      .then(function(response){
        console.log(response);
        alert("Successfully Placed order");
            $state.go('orders');
      },function(error){
        alert("Some error occured");
      })
    
  }


  $scope.DROPForm = function() {
   $http({
     method  : 'GET',
     url     : URL+'/v1/placeorder/address/'+$scope.id+'/order/'+$rootScope.order_id+'/',
     headers : {'Authorization': 'Bearer '+$cookies.get('key')} 
    })
    .success(function(data) {
        if (data.errors) {
          alert("Some error occured");
        } 
        else {
          console.log(data);
            alert("request completed");
            
        }
    });
  };



  

});


 