(function() {
	'use strict';

	angular
		.module('nomihodai.config')
		.config(config)

	config.$inject = ['$locationProvider'];

	function config($locationProvider) {
		$locationProvider.html5Mode(true);
		$locationProvider.hashPrefix('!');
	}
})();