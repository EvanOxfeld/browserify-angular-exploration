'use strict';
var angular = require('angular');

var moduleName = module.exports = 'myTodos';

angular.module(moduleName, [
		require('angular-ui-router'),
		'test'
	]);

require('./controller.js');
require('./routes.js');