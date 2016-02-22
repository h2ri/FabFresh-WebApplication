'use strict';


routerApp

  .controller('trackCTRL', function($rootScope,$scope, $http, $cookies) {
    $scope.user = [];
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com';
    $http({
      method  : 'GET',
      url     : URL+'/orders/'+$rootScope.order_id+'/',
      headers : {'Authorization': 'Bearer ' + $cookies.get('key')
                } 
     })
      .success(function(data) {
        if (data.errors) {
          alert("Some error occured");
        }
        else {
//          var type = {};
//          type["0"] = "cancelled";
//          type["1"] = "created";
//          type["2"] = "pickup";
//          type["3"] = "receivedAtCenter";
//          type["4"] = "precheck";
//          type["5"] = "tagging";
//          type["6"] = "wash";
//          type["7"] = "dry";
//          type["8"] = "iron";
//          type["9"] = "package";
//          type["10"] = "shipped";
//          type["11"] = "drop";
//          type["12"] = "completed";
            
            var type1 = {};
          type1["0"] = 0;
          type1["1"] = 10;
          type1["2"] = 20;
          type1["3"] = 30;
          type1["4"] = 30;
          type1["5"] = 30;
          type1["6"] = 40;
          type1["7"] = 50;
          type1["8"] = 60;
          type1["9"] = 70;
          type1["10"] = 80;
          type1["11"] = 90;
          type1["12"] = 100;  
            
          $scope.data=data;
    //alert(data.id);
    //$rootScope.data = data;
          $scope.data=data;
          var Status;
          data.status=parseInt(data.status);
          switch (data.status) {
          case 0:
              Status = "cancelled";
              break;
          case 1:
              Status = "created";
              break;
          case 2:
              Status = "pickup";
              break;
          case 3:
              Status = "receivedAtCenter";
              break;
          case 4:
              Status = "precheck";
              break;
          case 5:
              Status = "tagging";
              break;
          case 6:
              Status = "wash";
              break;
          case 7:
              Status = "dry";
              break;
          case 8:
              Status = "iron";
              break;
          case 9:
              Status = "package";
              break;
          case 10:
              Status = "shipped";
              break;
          case 11:
              Status = "drop";
              break;
          case 12:
              Status = "completed";
              break;        
      }
      $scope.Status=Status;
                   $scope.data.status=type1[data.status];
      //script for track is begin ;)            
              var el = document.getElementById('graph'); // get canvas
      var options = {
          percent:  el.getAttribute('data-percent') || 25,
          size: el.getAttribute('data-size') || 220,
          lineWidth: el.getAttribute('data-line') || 15,
          rotate: el.getAttribute('data-rotate') || 0
      }
          options.percent = data.status;
      var canvas = document.createElement('canvas');
      var span = document.createElement('span1');
      //options.percent = 

      //span.textContent = options.percent + '%';
          span.textContent = Status;
      span.textContent = options.percent + '%';
          
      if (typeof(G_vmlCanvasManager) !== 'undefined') {
          G_vmlCanvasManager.initElement(canvas);
      }
      var ctx = canvas.getContext('2d');
      canvas.width = canvas.height = options.size;

      el.appendChild(span);
      el.appendChild(canvas);

      ctx.translate(options.size / 2, options.size / 2); // change center
      ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

      //imd = ctx.getImageData(0, 0, 240, 240);
      var radius = (options.size - options.lineWidth) / 2;

      var drawCircle = function(color, lineWidth, percent) {
      		percent = Math.min(Math.max(0, percent || 1), 1);
      		ctx.beginPath();
      		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
      		ctx.strokeStyle = color;
              ctx.lineCap = 'round'; // butt, round or square
      		ctx.lineWidth = lineWidth
      		ctx.stroke();
      };

      drawCircle('#efefef', options.lineWidth, 1);
                  if(data.status==0)
      drawCircle('#efefef', options.lineWidth, options.percent / 100);
                  else
                      drawCircle('#7500e2', options.lineWidth, options.percent / 100);
      // script for track is end here ;)
        }
      });
});