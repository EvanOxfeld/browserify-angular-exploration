'use strict';

var angular = require('angular');

angular.module(require('./index.js'))

.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/todos');

	$stateProvider
		.state('todos', {
			url: '/todos',
			templateUrl: 'app/todo-list.html',
			controller: [function(){
				console.log("todo list controller");
			}]
		})
		.state('todos.detail', {
			url: '/todos/:index',
			templateUrl: '/app/todo-detail.html',
			controller: /*@ngInject*/ function($scope, $stateParams){
				$scope.todo = $scope.todos.list[+$stateParams.index];
			}
		});
});
