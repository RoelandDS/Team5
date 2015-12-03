var app = angular.module('forum', ['ui.router']);

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
          postPromise: ['categories', function(categories) {
            return categories.getAll();
          }]
        }
      });

    $urlRouterProvider.otherwise('home');
}]);

app.factory('categories', ['$http', function($http) {
  var o = {
    categories: []
  };

  o.getAll = function() {
    return $http.get('/categories').success(function(data) {
      data.forEach(function(category) {
        category.subforums = [];

        $http.get('/categories/' + category._id).success(function(data) {
          if(!data.subforums.length) {
            data.subforums.push({ title: 'No subforum found' })
          }
          o.categories.push(data);
        });
      });
    });
  }

  return o;
}]);

app.controller('MainCtrl', [
'$scope', 'categories',
function($scope, categories){
  $scope.categories = categories.categories;

  $scope.addCategory = function() {
    if(!$scope.title || $scope.title === '') { return; }

    $scope.categories.push({title: $scope.title});
    $scope.title = '';
  }
}]);
