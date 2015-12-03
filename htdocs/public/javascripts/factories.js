var app = angular.module('hackthefuture')

function rgb2hsv () {
      var rr, gg, bb,
          r = arguments[0] / 255,
          g = arguments[1] / 255,
          b = arguments[2] / 255,
          h, s,
          v = Math.max(r, g, b),
          diff = v - Math.min(r, g, b),
          diffc = function(c){
              return (v - c) / 6 / diff + 1 / 2;
          };

      if (diff == 0) {
          h = s = 0;
      } else {
          s = diff / v;
          rr = diffc(r);
          gg = diffc(g);
          bb = diffc(b);

          if (r === v) {
              h = bb - gg;
          }else if (g === v) {
              h = (1 / 3) + rr - bb;
          }else if (b === v) {
              h = (2 / 3) + gg - rr;
          }
          if (h < 0) {
              h += 1;
          }else if (h > 1) {
              h -= 1;
          }
      }
      return {
          h: Math.round(h * 65535),
          s: Math.round(s * 254),
          v: Math.round(v * 254)
      };
  }

app.factory('colour', ['$http', function($http) {
  var o = {
    colour: []
  };

  o.changeColour = function(rood, groen, blauw){
    var hsv = rgb2hsv(rood, groen, blauw);

    var hue = hsv.h;
    var sat = hsv.s;
    var bri = hsv.v;

    return $http.put("http://10.0.1.3/api/13c6eb73373cbacf3052be6b1221247/lights/12/state",
      {"hue": hue, "sat": sat, "bri": bri}).success(function(data) {

    });
  }

  o.turnOff = function() {
    return $http.put("http://10.0.1.3/api/13c6eb73373cbacf3052be6b1221247/lights/12/state", {"on": false}).success(function(){

    });
  }

  o.turnOn = function() {
    return $http.put("http://10.0.1.3/api/13c6eb73373cbacf3052be6b1221247/lights/12/state", {"on": true}).success(function(){
      console.log('test');

    });
  }

  return o;
}]);

app.factory('register', ['$http', function($http) {
  var o = {};

  o.register = function(teamname, firstTeam, secondTeam) {
    var data = {
      name: teamname,
      members: [
        {name: firstTeam},
        {name: secondTeam}
      ]
    };

    return $http.put("https://hackthefuture.herokuapp.com/dashboard/team",
      data).success(function(data) {
    });
  }

  return o;
}]);

app.factory('qrcode', ['$http', function($http) {
  var o = {};

  o.qrcode = function() {
    
  }

  return o;
}]);
