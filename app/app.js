var angular = require('angular');

angular
  .module('myTodos', [
    require('angular-ui-router')
  ])
  .config(require('./routes'))
  .controller('TodoController', require('./controller'));
