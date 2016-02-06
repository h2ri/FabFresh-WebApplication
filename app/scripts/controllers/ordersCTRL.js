'use strict';


routerApp
  .controller('ordersCTRL', function($rootScope,$scope, $http) {

    $scope.user = [];
    
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com';
    $http({
      method  : 'GET',
      url     : URL+'/orders/',
      headers : {'Authorization': 'Bearer '+$rootScope.access_token} 
     })
      .success(function(data) {
        if (data.errors) {
          alert("Some error occured");
        }
        else {
          
          var type = {};
          type["0"] = "Wash";
          type["1"] = "Iron";
          type["2"] = "Wash and Iron";

          var type = {};
          type["0"] = "cancelled";
          type["1"] = "created";
          type["2"] = "pickup";
          type["3"] = "receivedAtCenter";
          type["4"] = "precheck";
          type["5"] = "tagging";
          type["6"] = "wash";
          type["7"] = "dry";
          type["8"] = "iron";
          type["9"] = "package";
          type["10"] = "shipped";
          type["11"] = "drop";
          type["12"] = "completed";

          $scope.data=data;
          for(var i=0;i<data.length;i++){
              $scope.data[i].order_type=type[data[i].order_type];
              $scope.data[i].status=type[data[i].status];
              if(data[i].amount==null)
                  $scope.data[i].amount=0;
          }

        }
      });
});