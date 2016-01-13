/**
* LocationController
* @namespace nomihodai.location.controllers
*/
(function () {
  'use strict';

  angular
    .module('nomihodai.location.controllers')
    .controller('LocationController', LocationController);

  LocationController.$inject = ['$scope', '$rootScope'];

  /**
  * @namespace LocationController
  */
  function LocationController($scope, $rootScope) {
    var vm = this;
    vm.locations = [];
    vm.isDisabled  = false;
    vm.selectedLocationChange = selectedLocationChange;

    activate();


    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf nomihodai.location.controllers.LocationController
    */
    function activate() {
      $scope.$watchCollection(function () { return $scope.locations; }, render);
    }

    /**
    * @name render
    * @desc Saves locations
    * @param {Array} current The current value of `vm.locations`
    * @param {Array} original The value of `vm.locations` before it was updated
    * @memberOf nomihodai.location.controllers.LocationController
    */
    function render(current, original) {
      //vm.locations = current;
      for (var i = 0; i < current.length; i++) {
        vm.locations.push(current[i].mainarea);
        for (var j = 0; j < current[i].subareas.length; j++) {
          vm.locations.push(current[i].subareas[j]);
        }
      }
      return vm.locations;
    }

    function selectedLocationChange(location) {
      $rootScope.location = location
    }


  }
})();