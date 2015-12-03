var app = angular.module('hackthefuture');

app.controller('MainCtrl', [
  '$scope',
  function($scope) {

  }
]);

app.controller('stap1Ctrl', ['$scope', 'colour',
  function($scope, colour){
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

app.controller('stap2Ctrl', ['$scope', 'register',
  function($scope, register){
    $scope.register = function() {
      if(!$scope.teamname || !$scope.teamname === '' || !$scope.firstTeam ||
        !$scope.firstTeam === '' || !$scope.secondTeam || !$scope.secondTeam === '') { return; }

      register.register($scope.teamname, $scope.firstTeam, $scope.secondTeam);
    }
  }
]);

app.controller('stap3Ctrl', ['$scope', 'qrcode',
  function($scope, qrcode) {
    
  }
]);
