/**
* NavbarController
* @namespace nomihodai.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('nomihodai.layout.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'LocationService'];

  /**
  * @namespace NavbarController
  */
  function NavbarController($scope, LocationService) {
    var vm = this;

    vm.locations = [];

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf nomihodai.layout.controllers.NavbarController
    */
    function activate() {
      //LocationService.all().then(foodlistSuccessFn, foodlistErrorFn);
      vm.locations = LocationService.all();
    }
  }
})();