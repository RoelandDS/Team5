var app = angular.module('hackthefuture');

app.controller('MainCtrl', [
  '$scope', 'colour',
  function($scope, colour) {
    $scope.colour = colour.colour;

    $scope.red = function() {
      colour.changeColour(255, 0, 0);
    }

    $scope.yellow = function() {
      colour.changeColour(255, 255, 0);
    }

    $scope.blue = function() {
      colour.changeColour(0, 0, 255);
    }

    $scope.green = function() {
      colour.changeColour(0, 255, 0);
    }

    $scope.turnOff = function() {
      colour.turnOff();
    }

    $scope.turnOn = function() {
      colour.turnOn();
    }
  }
]);
