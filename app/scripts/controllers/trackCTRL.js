'use strict';


routerApp

  .controller('trackCTRL', function(service,$state,$localStorage,$rootScope,$scope, $http, $cookies) {
    $scope.user = [];
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com';
    if(angular.isUndefined($cookies.get('otp_flag'))){
        $state.go('login');
        return;
    }
    // console.log($localStorage.previousState);
    // console.log($localStorage.currentState);
    // console.log(service.order);

    if($localStorage.previousState!='deliver' && $localStorage.previousState!='orders' && $localStorage.previousState!=''){
      $state.go('orders');
      return;
    }
     else if($localStorage.previousState=='orders' && $localStorage.order_id==undefined){
       service.order=0;
       $state.go('orders');
       return;
     }
    // service.order=0;
    $http({
      method  : 'GET',
      url     : URL+'/orders/'+$localStorage.order_id+'/',
      headers : {'Authorization': 'Bearer ' + $cookies.get('token')
                } 
     })
      .success(function(data) {
        if (data.errors) {
          alert("Some error occured");
        }
        else {
            
            var type1 = {};
          type1["0"] = 0;
          type1["1"] = 10;
          type1["2"] = 20;
          type1["3"] = 30;
          type1["4"] = 30;
          type1["5"] = 30;
          type1["6"] = 40;
          type1["7"] = 50;
          type1["8"] = 60;
          type1["9"] = 70;
          type1["10"] = 80;
          type1["11"] = 90;
          type1["12"] = 100;  
            
          $scope.data=data;
          var Status;
          data.status=parseInt(data.status);
          switch (data.status) {
          case 0:
              Status = "cancelled";
              break;
          case 1:
              Status = "created";
              break;
          case 2:
              Status = "pickup";
              break;
          case 3:
              Status = "receivedAtCenter";
              break;
          case 4:
              Status = "precheck";
              break;
          case 5:
              Status = "tagging";
              break;
          case 6:
              Status = "wash";
              break;
          case 7:
              Status = "dry";
              break;
          case 8:
              Status = "iron";
              break;
          case 9:
              Status = "package";
              break;
          case 10:
              Status = "shipped";
              break;
          case 11:
              Status = "drop";
              break;
          case 12:
              Status = "completed";
              break;        
      }
      $scope.Status=Status;
                   $scope.data.status=type1[data.status];
    
        }
      });
});