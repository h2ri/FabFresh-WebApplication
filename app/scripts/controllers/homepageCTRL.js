'use strict';


routerApp
  .controller('homepageCTRL', function($http, $rootScope,$scope) {
  $scope.addres = [];
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com';
    var flag=0;

    $scope.submitForm = function() {
      $scope.addres = {
        "address": document.getElementById('address').innerHTML,
        "addressLocality": locality1,
        "postalcode": postalcode,
        "addressLatitude": lat,
        "addressLogitude": lng,
        "addressSubLocality": $scope.sublocal
      };
    $http({
      method  : 'POST',
      url     : URL+'/users/address/',
      data    : $scope.addres,
      headers : {'Content-Type': 'application/json', 'Authorization': 'Bearer '+$rootScope.access_token}
     })
      .success(function(data) {
        if (data.errors) {
          alert("Some error occured");

        }
        else {
          alert("address has been added");
          // alert(data.addressLatitude);
          // alert(data.addressLogitude);
          // alert(data.addressSubLocality);
          // alert(data.addressLocality);
          // alert(data.address);
          // alert(data.postalcode);
        }
      });
    };


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
