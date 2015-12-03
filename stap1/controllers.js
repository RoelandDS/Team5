var app = angular.module('hackthefuture');

app.controller('MainCtrl', [
  '$scope', 'colour',
  function($scope, colour) {
    $scope.colour = colour.colour;

    $scope.changeColour = function(colour) {
      switch (colour) {
        case rood:
          colour.changeColour();
          break;
        case groen:

          break;
        case geel:

          break;
        case blauw:

          break;
        default:

      }
      colour.changeColour($scope.rood, $scope.groen, $scope.blauw);
    }

    $scope.turnOff = function() {

    }
  }
]);
