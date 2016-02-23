'use strict'

angular.module('routerApp')
 .service('service',function service($http,$q,$rootScope,$cookies){ var URL = 'http://fabfresh-dev.elasticbeanstalk.com';
  var service = this;
      service.taskList = {};

  service.getAddress= function(){
    var defer = $q.defer();
    $http({
     method  : 'GET',
     url     : URL+'/users/address/',
     headers : {'Authorization': 'Bearer '+$cookies.get('key')} 
    })
    .success(function(response){
        defer.resolve(response);
    })
    .error(function(error,status){
      defer.reject(error);
    })

   return defer.promise
  };


  service.otpResend= function(){
    var deferotp = $q.defer();
    $http({
     method  : 'GET',
     url     : URL+'/users/otpresend/',
     headers : {'Authorization': 'Bearer '+$cookies.get('key')} 
    })
    .success(function(response){
        deferotp.resolve(response);
    })
    .error(function(error,status){
      deferotp.reject(error);
    })

   return deferotp.promise
  };




  service.checkOtp= function(x){
    var defers = $q.defer();
    $http({
      method  : 'GET',
      url     : URL+'/users/otp/',
      params : {otp:x},
      headers : {'Authorization': 'Bearer '+$cookies.get('key')} 
     })
    .success(function(response){
        defers.resolve(response);
    })
    .error(function(error,status){
      defers.reject(error);
    })

   return defers.promise
  };


  service.checkCouponValidity = function(x){
    var defercv = $q.defer();
    $http({
     method  : 'POST',
     url     : URL+'/couponsvalididty/',
     data : x,
     headers : {'Authorization': 'Bearer '+$cookies.get('key'), 'Content-Type': 'application/json'} 
    })
    .success(function(response){
      defercv.resolve(response);
    })
    .error(function(error,status){
      defercv.reject(error);
    })

    return defercv.promise
  };


   service.placeOrder= function(x){
      var deferpf = $q.defer();
      $http({
         method  : 'GET',
         url     : URL+'/v1/placeorder/address/'+x.addressId+'/order/'+"0/",
         params  :{type: x.type},
         headers : {'Authorization': 'Bearer '+$cookies.get('key')} 
      })
      .success(function(response){
          deferpf.resolve(response);
      })
      .error(function(error,status){
        deferpf.reject(error);
      })

     return deferpf.promise;
  };

  service.deliverNow= function(address,order){
      var deferpf = $q.defer();
      $http({
         method  : 'GET',
         url     : URL+'/v1/placeorder/address/'+address.id+'/order/'+order.id+'/',
         headers : {'Authorization': 'Bearer '+$cookies.get('key')} 
      })
      .success(function(response){
          deferpf.resolve(response);
      })
      .error(function(error,status){
        deferpf.reject(error);
      })

     return deferpf.promise;
  };



  service.getOrder= function(id){
    var deferOrder = $q.defer();
     $http({
      method  : 'GET',
      url     : URL+'/orders/'+id+'/',
      headers : {'Authorization': 'Bearer '+ $cookies.get('key')} 
     })
    .success(function(response){
        deferOrder.resolve(response);
    })
    .error(function(error,status){
      deferOrder.reject(error);
    })

   return deferOrder.promise
  };

    service.getOrders= function(){
    var deferOrder = $q.defer();
     $http({
      method  : 'GET',
      url     : URL+'/orders/',
      headers : {'Authorization': 'Bearer '+ $cookies.get('key')} 
     })
    .success(function(response){
        deferOrder.resolve(response);
    })
    .error(function(error,status){
      deferOrder.reject(error);
    })

   return deferOrder.promise
  };


    service.addAddress = function(add){
      var deferhome = $q.defer();
      $http({
      method  : 'POST',
      url     : URL+'/users/address/',
      data    : add,
      headers : {'Content-Type': 'application/json', 'Authorization': 'Bearer '+$cookies.get('key')}
     })
      .success(function(response){
        deferhome.resolve(response);
    })
    .error(function(error,status){
      deferhome.reject(error);
    })

    return deferhome.promise

    };


     service.rep = function(us){
      var deferrep = $q.defer();
      $http({
      method  : 'POST',
      url     : URL+'/users/info/reset_password/',
      data    : us,
      headers : {'Content-Type': 'application/json'} 
     })
      .success(function(response){
        deferrep.resolve(response);
    })
    .error(function(error,status){
      deferrep.reject(error);
    })

    return deferrep.promise

    };



    service.login1 = function(us){
      var deferl = $q.defer();
      $http({
      method  : 'POST',
      url     : URL+'/users/login/',
      data    : us,
      headers : {'Content-Type': 'application/json'} 
     })
      .success(function(response){
        deferl.resolve(response);
    })
    .error(function(error,status){
      deferl.reject(error);
    })

    return deferl.promise

    };

    service.login2 = function(){
      var deferll = $q.defer();
      $http({
          method  : 'GET',
          url     : URL+'/users/info/',
          headers : {'Authorization': 'Bearer '+$cookies.get('key')} 
         })
      .success(function(response){
        deferll.resolve(response);
    })
    .error(function(error,status){
      deferll.reject(error);
    })

    return deferll.promise
  };


   service.signUp = function(sub){
    var defersign = $q.defer();
    $http({
      method  : 'POST',
      url     : URL+'/users/sign_up/',
      data    : sub,
      headers : {'Content-Type': 'application/json'} 
     }).success(function(response){
        defersign.resolve(response);
    })
    .error(function(error,status){
      defersign.reject(error);
    })
    return defersign.promise
  };




  return service;
 });