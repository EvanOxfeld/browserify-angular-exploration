angular
  .module('myTodos', ['ui.router'])
  .config(function($stateProvider) {
    $stateProvider
      .state('state1', {
        url: '/state1',
        template: '<h1>State 1</h1>'
      })
      .state('state2', {
        url: '/state2',
        template: '<h1>State 2</h1>'
      });
  });

angular
  .module('myTodos')
  .controller('myController', function($scope) {
    $scope.things = ['foo'];
  });
