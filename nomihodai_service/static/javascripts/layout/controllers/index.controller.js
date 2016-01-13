/**
* IndexController
* @namespace nomihodai.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('nomihodai.layout.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', 'Food', '$rootScope'];

  /**
  * @namespace IndexController
  */
  function IndexController($scope, Food, $rootScope) {
    var vm = this;
    vm.foodlist = [];

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf nomihodai.layout.controllers.IndexController
    */
    function activate() {
      //Food.all().then(foodlistSuccessFn, foodlistErrorFn);
      Food.search().then(foodlistSuccessFn, foodlistErrorFn);
      $scope.$watch(function () { return $rootScope.location; }, locationChanged);
      $scope.$watch(function () { return $rootScope.month; }, monthChanged);
      $scope.$watch(function () { return $rootScope.season; }, seasonChanged);
      
      /**
      * @name foodlistSuccessFn
      * @desc Update foodlist array on view
      */
      function foodlistSuccessFn(data, status, headers, config) {
        vm.foodlist = data.data;
        //console.log(vm.foodlist)
      }


      /**
      * @name foodlistErrorFn
      * @desc Show snackbar with error
      */
      function foodlistErrorFn(data, status, headers, config) {
        //TODO
      }

      function locationChanged(current, old) {
        Food.search($rootScope.location,$rootScope.season,$rootScope.month).then(foodlistSuccessFn, foodlistErrorFn);
      }
      
      function monthChanged(current, old) {
        Food.search($rootScope.location,$rootScope.season,$rootScope.month).then(foodlistSuccessFn, foodlistErrorFn);
      }

      function seasonChanged(current, old) {
        Food.search($rootScope.location,$rootScope.season,$rootScope.month).then(foodlistSuccessFn, foodlistErrorFn);
      }
      
    }

  }
})();