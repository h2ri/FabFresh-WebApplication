'use strict';


routerApp

  .controller('trackCTRL', function($state,$localStorage,$rootScope,$scope, $http, $cookies,service) {
    
    if($localStorage.previousState!='orders' && $localStorage.previousState!=''){
      $state.go('orders');
      return;
    }
    service.track($localStorage.order_id)
      .then(function(data) {
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
          var Status;
          data.status=parseInt(data.status);
          switch (data.status) {
          case 0:
              Status = "Cancelled";
              break;
          case 1:
              Status = "Created";
              break;
          case 2:
              Status = "Pickup";
              break;
          case 3:
              Status = "ReceivedAtCenter";
              break;
          case 4:
              Status = "Precheck";
              break;
          case 5:
              Status = "Tagging";
              break;
          case 6:
              Status = "Wash";
              break;
          case 7:
              Status = "Dry";
              break;
          case 8:
              Status = "Iron";
              break;
          case 9:
              Status = "Package";
              break;
          case 10:
              Status = "Shipped";
              break;
          case 11:
              Status = "Drop";
              break;
          case 12:
              Status = "Completed";
              break;        
      }
      $scope.Status=Status;
      $scope.data.status=type1[data.status];           
      var el = document.getElementById('graph');
      var options = {
          percent:  el.getAttribute('data-percent') || 25,
          size: el.getAttribute('data-size') || 220,
          lineWidth: el.getAttribute('data-line') || 15,
          rotate: el.getAttribute('data-rotate') || 0
      }
      options.percent = data.status;
      var canvas = document.createElement('canvas');
      var span = document.createElement('span1');
      span.textContent = Status;
          
      if (typeof(G_vmlCanvasManager) !== 'undefined') {
          G_vmlCanvasManager.initElement(canvas);
      }
      var ctx = canvas.getContext('2d');
      canvas.width = canvas.height = options.size;

      el.appendChild(span);
      el.appendChild(canvas);

      ctx.translate(options.size / 2, options.size / 2);
      ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

      var radius = (options.size - options.lineWidth) / 2;

      var drawCircle = function(color, lineWidth, percent) {
      		percent = Math.min(Math.max(0, percent || 1), 1);
      		ctx.beginPath();
      		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
      		ctx.strokeStyle = color;
          ctx.lineCap = 'round';
      		ctx.lineWidth = lineWidth
      		ctx.stroke();
      };

        drawCircle('#efefef', options.lineWidth, 1);
        if(data.status==0)
          drawCircle('#efefef', options.lineWidth, options.percent / 100);
        else
          drawCircle('#303030', options.lineWidth, options.percent / 100);
      });
});