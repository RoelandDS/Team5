var app = angular.module('hackthefuture')
  .constant('APIKEY', '13c6eb73373cbacf3052be6b1221247')
  .constant('LIGHTNUMBER', '12');

app.controller('MainCtrl', [
'$scope', 'colour',
function($scope, colour){
  $scope.colour = colour.colour;

  $scope.changeColour = function() {
    if(!$scope.rood || !$scope.groen || !$scope.blauw ) { return; }

    colour.changeColour($scope.rood, $scope.groen, $scope.blauw);
  }

  $scope.turnOff = function() {

  }
}]);
