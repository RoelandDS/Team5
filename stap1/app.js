var app = angular.module('stap1', ['ui.router']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl',
        resolve: {
          postPromise: ['colour', function(colour) {
            return colour.getAll();
          }]
        }
      });

    $urlRouterProvider.otherwise('home');
}]);

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

  $scope.putColour = function() {
    if(!$scope.apikey || !$scope.lightnumber) { return; }
  }
}]);
