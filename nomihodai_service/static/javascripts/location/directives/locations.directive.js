/**
* Location
* @namespace nomihodai.location.directives
*/
(function () {
  'use strict';

  angular
    .module('nomihodai.location.directives')
    .directive('locations', locations);

  /**
  * @namespace Location
  */
  function locations() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf nomihodai.locations.directives.Location
    */
    var directive = {
      controller: 'LocationController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        locations: '='
      },
      templateUrl: '/static/templates/location/locations.html'
    };

    return directive;
  }
})();