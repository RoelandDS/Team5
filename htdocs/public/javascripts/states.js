var app = angular.module('hackthefuture');

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      })
      .state('stap1', {
        url: '/stap1',
        templateUrl: '/stap1.html',
        controller: 'stap1Ctrl'
      })
      .state('stap2', {
        url: '/stap2',
        templateUrl: '/stap2.html',
        controller: 'stap2Ctrl'
      });
}]);
