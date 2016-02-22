'use strict';


routerApp
  .controller('addressCTRL', function($http, $rootScope,$scope,$cookies,$state,service) {
     if($cookies.get('key') == undefined){
        $state.go('login');
        alert("Please log in to continue");
        return;
      }
    $scope.submitForm = function() {
      $scope.address = {
        "address": document.getElementById('address').innerHTML,
        "addressLocality": locality1,
        "postalcode": postalcode,
        "addressLatitude": lat,
        "addressLogitude": lng,
        "addressSubLocality": $scope.sublocal
      };
      service.addAddress($scope.address)
      .then(function(reponse){
        alert('Address has been added');
        $state.go("place_order");
      },function(error){
        alert('Some error occured')
      })
    };
    $cookies.put('count',4);
});



routerApp.directive('script1', function() {
  var flag=0;
	 function load_script() {
            var s = document.createElement('script'); // use global document since Angular's $document is weak
            s.src = "https://maps.googleapis.com/maps/api/js?callback=initMap";
            document.body.appendChild(s);
        }
    return {
      restrict: 'E',
      scope: false,
      link: function(scope, elem, attr) {
        if (attr.type === 'text/javascript-lazy') {
          load_script();
        }
      }
    };
  });
