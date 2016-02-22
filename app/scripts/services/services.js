'use strict'

angular.module('routerApp')
 .service('task',function task($http,$q,$rootScope,$cookies){
  var URL = 'http://fabfresh-dev.elasticbeanstalk.com';
  var task = this;
      task.taskList = {};


  task.getAllTasks= function(){
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
  }


  task.getOtpResend= function(){
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
  }




  task.subForm= function(x){
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
  }


  task.checkCV = function(x){
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
  }


   task.placeForm= function(x,y){
    var deferpf = $q.defer();
    alert(x);
    alert(y);
    $http({
     method  : 'GET',
     url     : URL+'/v1/placeorder/address/'+x+'/order/'+"0"+'/',
     params  :{type: y},
     headers : {'Authorization': 'Bearer '+$cookies.get('key')} 
    })
    .success(function(response){
        deferpf.resolve(response);
    })
    .error(function(error,status){
      deferpf.reject(error);
    })

   return deferpf.promise
  }



  task.order= function(){
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
  }


      task.order= function(){
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
  }


    task.homep = function(add){
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

    }


     task.rep = function(us){
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

    }



  return task;
 });