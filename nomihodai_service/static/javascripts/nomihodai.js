angular
  .module('nomihodai', [
  	'nomihodai.config',
  	'nomihodai.routes',
  	'nomihodai.food',
  	'nomihodai.layout'
]);

angular
	.module('nomihodai.config', []);

angular
	.module('nomihodai.routes', ['ngRoute']);

angular
	.module('nomihodai')
	.run(run);

run.$inject = ['$http'];

function run($http) {
	$http.defaults.xsrfHeaderName = 'X-CSRFToken';
	$http.defaults.xsrfCookieName = 'csrvtoken';
}