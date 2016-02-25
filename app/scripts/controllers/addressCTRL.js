'use strict';


routerApp
  .controller('addressCTRL', function($localStorage,$http, $rootScope,$scope,$cookies,$state,service) {
     if(angular.isUndefined($cookies.get('otp_flag'))){
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
        $localStorage.homeState="place_order";
        if(service.deliver==1 && $localStorage.previousState=='deliver'){
          service.deliver=2;
          $state.go("deliver");
        }
        else if(service.place==1 && $localStorage.previousState=='place_order'){
          service.place=2;
          $state.go("place_order");
        }
        else
          $state.go("place_order");
      },function(error){
          alert("We don't deliver to this area.");
      })
    };
});



routerApp.directive('script1', function($cookies) {
  var flag=0;
	 function load_script() {
          if($cookies.get('key') == undefined)
            return;
          if(flag==0){
            var s = document.createElement('script'); // use global document since Angular's $document is weak
            s.src = "https://maps.googleapis.com/maps/api/js?callback=initMap";
            document.body.appendChild(s);
            flag=1;
          }
          else
            initMap();
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
