(function () {
  'use strict';

  angular
    .module('nomihodai.layout', [
      'nomihodai.layout.controllers'
    ]);

  angular
    .module('nomihodai.layout.controllers', ["ngMaterial"])
    .config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('blue', {
				'default': '700', // by default use shade 400 from the pink palette for primary intentions
				'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
				'hue-2': '400', // use shade 600 for the <code>md-hue-2</code> class
				'hue-3': '800' // use shade A100 for the <code>md-hue-3</code> class
			})
			.accentPalette('yellow');
	});
})();