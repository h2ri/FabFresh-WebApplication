'use strict';


routerApp
  .controller('priceCTRL', function($rootScope,$scope,$cookies,service) {
  	
  		service.getPrice()
  			.then(function(response){
  				$scope.data = response;
  			},function(error){
  				console.log("error in price");
  			});
});

