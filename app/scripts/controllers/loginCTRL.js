'use strict';


routerApp
  .controller('loginCTRL', function($localStorage,$window, $rootScope,$scope, $http, $state, $cookies,service,$auth,$cookieStore) {
  document.body.addEventListener('click', boxCloser, true);
  //$state.go($state.current, {}, {reload: true});

$scope.fb = function(){
  FB.getLoginStatus(function(response) {
   console.log(response);
   // if(response.status == "unknown")
    fb();
});
}


   function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me',{fields:'first_name,email'},function(response) {
            console.log(JSON.stringify(response));
      
    });
  }

    function fb() {
            FB.login(function (response) {
                console.log(response);
                if (response.authResponse) {
                  var tkk = response.authResponse.accessToken;
                  console.log(tkk);
                    testAPI();
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            },{scope: 'public_profile,email',
               return_scopes: true,
              
             });
            
        };








  $scope.$on('LOAD', function() {
        $scope.loading = true
      });
    $scope.$on('UNLOAD', function() {
      $scope.loading = false
    });
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1);
    $scope.user = [];
    
    
       $scope.submitForm = function() {
           $scope.$emit('LOAD');
        $scope.user = {
          "username": $scope.login.email,
          "password": $scope.login.password
        };
        service.login1($scope.user)                 //call to service
        .then(function(data){
          $scope.$emit('UNLOAD');
          if(data.status=="Not Authenticated"){
              alert("Either email or password is wrong");
            } else {
            $cookies.put('token',data.access_token, {'expires': expireDate}); 
            
            service.login2()             
            .then(function(data){
              if(data[0].UserInfo.flag){  
                  
                    $cookies.put('otp_flag',1);
                    service.getAddress()
                    .then(function(response){
                        if(response.length>0)
                          $localStorage.homeState = 'place_order';
                        else
                          $localStorage.homeState = 'address';
                        $state.go($localStorage.homeState);
                    })
                }
                else
                  $state.go('otp');
                $localStorage.username=data[0].username; 
            },function(error){
              $scope.$emit('UNLOAD');
              alert("Some error occured");
            })
            
          }

        },function(error){
          alert('Some error occured');
        })
      };

      
    var flag=0;
    $scope.set = function() {
      if(flag)
        return;
      if($scope.login!=undefined && $scope.login.password!=undefined){
        setClass('#Email');
        setClass('#password');
        flag=1;
      }
    };
      $('.awesome-form .input-group input').focusout(function(){
        var text_val = $(this).val();
        if(text_val === "")
          $(this).removeClass('has-value');
        else {
          $(this).addClass('has-value');
        }
    });

});