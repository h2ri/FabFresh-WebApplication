'use strict';

angular.module('Login.services', []).
  factory('loginAPIservice', function($http, $q) {
    $http.defaults.headers.common.Authorization = 'Bearer hari';
    $http.defaults.headers.post["Content-Type"] = "application/json";
    $http.defaults.headers.patch["Content-Type"] = "application/json";
    var loginAPI = {};

	var deferred = $q.defer();

	//var URL = 'http://fabfresh.elasticbeanstalk.com'
  //var URL = 'http://localhost:8000'
  var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
  











	loginAPI.getOrders = function() {

		return $http({
		    url : URL + '/orders.json',
		    method : 'GET'
		})
			.then(function(response){

				deferred.resolve(response.data);
                		return deferred.promise;
            		},function(response){
				deferred.reject(response);
                		return deferred.promise;			
			});
	};








  loginAPI.getClothPrice = function(id){
      var deferredPrice = $q.defer();
      return $http({
          //url : URL + '/order/reciept?id=45.json',
          method : 'GET',
          url : URL + '/order/reciept/',  
          params: {
            "id" : id
          }
      }).then(function(response){
            deferredPrice.resolve(response.data);
                return deferredPrice.promise;
                },function(response){
                    deferredPrice.reject(response);
                        return deferredPrice.promise;
                });
  };

    return loginAPI;
  });