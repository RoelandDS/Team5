var app = angular.module('hackthefuture', ['ui.router']);

app.factory('colour', ['$http', function($http, API) {
  var o = {
    colours: []
  };

  o.getAll = function(value) {
    console.log('joow')
    var hue, sat, bri;
    switch(value){
      case "geel":

        break;
      case "blauw":

        break;
      case "groen":

        break;
      case "rood": default:
        hue = 0;
        sat = 254;
        bri = 254;
    }

    return $http.put("http://10.0.1.3/api/" + $scope.apikey + '/lights/' + $scope.lightnumber + '/state',
      {"hue": hue, "sat": sat, "bri": bri}).success(function(data) {

    });
  }

  return o;
}]);

app.controller('MainCtrl', [
'$scope', 'colour',
function($scope, colour){
  $scope.colour = colour.colour;

  $scope.changeColour = function() {
    if(!$scope.apikey || !$scope.lightnumber || !$scope.colour) { return; }

    console.log($scope.colour);
  }
}]);
