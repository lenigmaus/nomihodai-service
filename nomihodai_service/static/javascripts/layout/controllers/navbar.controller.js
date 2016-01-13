/**
* NavbarController
* @namespace nomihodai.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('nomihodai.layout.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', '$rootScope', 'LocationService'];

  /**
  * @namespace NavbarController
  */
  function NavbarController($scope, $rootScope, LocationService) {
    var vm = this;
    vm.monthSelected = monthSelected
    vm.seasonSelected = seasonSelected
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
      $scope.$watch(function () { return $rootScope.month; }, scopeChanged);
      $scope.$watch(function () { return $rootScope.season; }, scopeChanged);
    }

    function monthSelected() {
      $rootScope.month = vm.month;
    }

    function seasonSelected() {
      $rootScope.season = vm.season;
    }

    function scopeChanged(current, old) {
        vm.month = $rootScope.month;
        vm.season = $rootScope.season;
      }

  }
})();