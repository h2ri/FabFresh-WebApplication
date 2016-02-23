'use strict';


routerApp
 .controller('place_orderCTRL', function($window,$cookies, $rootScope,$scope, $http, $state,Pagination,service) {
     if($cookies.get('key') == undefined){
        $state.go('login');
        alert("Please log in to continue");
        return;
      }
      
    $scope.getAddress = function(){
      service.getAddress()
        .then(function(response){
          $scope.data=response;
          $scope.l = $scope.data.length;
          $scope.currentPage = 0;
          $scope.pagination = Pagination.getNew(2);
        },function(error){
          alert("some error occured");
        })
      };
      $scope.getAddress();

      $scope.goToAddress = function(){
        service.place=1;
        $state.go('address');
      };


      $scope.checkCouponValidity = function(){
      var x = {
        "couponTag": $scope.coupon
      };
      service.checkCouponValidity(x)
        .then(function(response){
          alert(response.status);
          if(response.status == 'Invalid Coupon'){
            $scope.isvalid = response.status;
          }else{
            $scope.isvalid='Coupon Valid';
          }
        },function(error){
            alert("some error occured");
      })
    };
 
  $scope.placeOrderForm = function() {
     service.placeOrder($scope)
        .then(function(response){
          if(response.status=='Time Up'){
            alert("Order cannot be placed right now");
          }
          else{
            alert("Order placed Successfully");
            $state.go("orders");
          }
          
        },function(error){
            alert("some error occured");
      })
  };


      var modal = document.getElementById('myModal');
      var modal1 = document.getElementById('myModal1');
      var modal2 = document.getElementById('myModal2');
      var modal3 = document.getElementById('myModal3');
      // Get the button that opens the modal
      var btn = document.getElementById("placebtn");
      var btn1 = document.getElementById("btn1");
      var btn2 = document.getElementById("btn2");
      var btn3 = document.getElementById("btn3");
      var btn4 = document.getElementById("btn4");
      var btn5 = document.getElementById("btn5");
      var btn6 = document.getElementById("btn6");
      var btn7 = document.getElementById("btn7");
        
      if(service.place==1){
        modal1.style.display = "block";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal.style.display = "none";
        service.place=0;
      }
      else{

        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal.style.display = "block";
      }
      $scope.type=0;


      btn.onclick = function() {
      $( '.mdl-layout__drawer, .mdl-layout__obfuscator' ).removeClass( 'is-visible' );
      modal1.style.display = "none";
      modal2.style.display = "none";
      modal3.style.display = "none";
      modal.style.display = "block";
      }

      btn1.onclick = function() {
        modal.style.display = "none";
        modal1.style.display = "block";
      }

      $scope.getAddress = function(x) {
        $scope.address=x.address;
        $scope.addressId=x.id;
        modal1.style.display = "none";
        modal2.style.display = "block";
      }
      btn3.onclick = function() {
          modal2.style.display = "none";
          modal3.style.display = "block";
      }
      btn5.onclick = function() {
          modal1.style.display = "none";
          modal.style.display = "block";
      }

      btn6.onclick = function() {
        modal2.style.display = "none";
        modal1.style.display = "block";
      }

      btn7.onclick = function() {
        modal3.style.display = "none";
        modal2.style.display = "block";
      }

});


 