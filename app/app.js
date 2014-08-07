var angular = require('angular');

angular
  .module('myTodos', ['ui.router'])
  .config(function($stateProvider) {
    $stateProvider
      .state('index', {
        url: '',
        views: {
          'sidebarView': {
            template: '<ol><li ng-repeat="todo in todos.list"><a ng-click="todos.active = todo">{{ todo.name }}</a>' +
                     ' [<a href ng-click="todos.delete($index)">X</a>]</li></ol>' +
                      '<h3 ng-hide="todos.list.length > 0">No Todos</h3>'
          },
          'mainView': {
            template: [
              '<div ng-show="todos.active">',
              'Name: <input ng-model="todos.active.name"/>',
              '<h4>Description:</h4>',
              '<textarea rows="20" ng-model="todos.active.description"></textarea>',
              '</div>',
              '<div ng-hide="todos.active"><-- Select a todo</div>'
            ].join('')
          }
        }
      });
  });

var todoController = require('./controller');

angular
  .module('myTodos')
  .controller('TodoController', todoController);
