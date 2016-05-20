'use strict';


routerApp
  .controller('ordersCTRL', function($localStorage,$sessionStorage,$rootScope,$scope,$state, $http,$cookies,service,userService) {
   if(angular.isUndefined($cookies.get('otp_flag') )){
        $state.go('login');
        alert("Please log in to continue");
        return;
      }  


      if($localStorage.previousState!='track_order' && $localStorage.previousState!=''){
        $localStorage.order_id=undefined;
      }
      
      service.getOrders()
      .then(function(data){
        var type = {};
          type["0"] = "Wash and Iron";
          type["1"] = "Wash and Fold";
          type["2"] = "Iron";

          var type1 = {};
          type1["0"] = "cancelled";
          type1["1"] = "created";
          type1["2"] = "pickup";
          type1["3"] = "receivedAtCenter";
          type1["4"] = "precheck";
          type1["5"] = "tagging";
          type1["6"] = "wash";
          type1["7"] = "dry";
          type1["8"] = "iron";
          type1["9"] = "package";
          type1["10"] = "shipped";
          type1["11"] = "drop";
          type1["12"] = "completed";

          $scope.data=data;
          for(var i=0;i<data.length;i++){
            $scope.data[i].created_at_time= strToDate(data[i].created_at_time);

              $scope.data[i].order_type=type[data[i].order_type];
              $scope.data[i].status=type1[data[i].status];
              //$scope.data[i].created_at_time= str.substring(11,18)+", "+str.substring(0,10);
              if(data[i].amount==null)
                  $scope.data[i].amount=0;
              if(data[i].weight==null)
                  $scope.data[i].weight=0;
              if(data[i].quantity==null)
                  $scope.data[i].quantity=0;
              if(data[i].coupon==null)
                  $scope.data[i].coupon="No Coupon";
              if(data[i].afterDiscount==null)
                  $scope.data[i].afterDiscount="No Discount";

          }


      },function(error){
        alert("some error occured");
      });
    
     function strToDate(str) {
       return new Date(str);
    };

    $scope.track_order = function(id) {
        $localStorage.order_id=id;
        service.order=1;
        $state.go('track_order');
    };

    $scope.cancel_order = function(id){
      var cd = {
        "id": id,
      };

      service.cancel(cd)
        .then(function(data){
          window.alert("order succesfully cancelled");
          $state.reload();
        },function(error){
          alert("Some Error Occoured");
        });
    };
});