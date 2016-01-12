/**
* IndexController
* @namespace nomihodai.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('nomihodai.layout.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', 'Food'];

  /**
  * @namespace IndexController
  */
  function IndexController($scope, Food) {
    var vm = this;

    vm.foodlist = [];

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf nomihodai.layout.controllers.IndexController
    */
    function activate() {
      Food.all().then(foodlistSuccessFn, foodlistErrorFn);

      /**
      * @name foodlistSuccessFn
      * @desc Update foodlist array on view
      */
      function foodlistSuccessFn(data, status, headers, config) {
        vm.foodlist = data.data;
        console.log(vm.foodlist)
      }


      /**
      * @name foodlistErrorFn
      * @desc Show snackbar with error
      */
      function foodlistErrorFn(data, status, headers, config) {
        //TODO
      }
    }
  }
})();