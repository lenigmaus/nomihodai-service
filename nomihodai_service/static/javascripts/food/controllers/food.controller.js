/**
* FoodController
* @namespace nomihodai.food.controllers
*/
(function () {
  'use strict';

  angular
    .module('nomihodai.food.controllers')
    .controller('FoodController', FoodController);

  FoodController.$inject = ['$scope'];

  /**
  * @namespace FoodController
  */
  function FoodController($scope) {
    var vm = this;

    vm.columns = [];

    activate();


    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf nomihodai.food.controllers.FoodController
    */
    function activate() {
      $scope.$watchCollection(function () { return $scope.foodlist; }, render);
    }


    /**
    * @name approximateShortestColumn
    * @desc An algorithm for approximating which column is shortest
    * @returns The index of the shortest column
    * @memberOf nomihodai.food.controllers.FoodController
    */
    function approximateShortestColumn() {
      var scores = vm.columns.map(columnMapFn);

      return scores.indexOf(Math.min.apply(this, scores));


      /**
      * @name columnMapFn
      * @desc A map function for scoring column heights
      * @returns The approximately normalized height of a given column
      */
      function columnMapFn(column) {
        var lengths = column.map(function (element) {
          return element.description.length;
        });

        return lengths.reduce(sum, 0) * column.length;
      }


      /**
      * @name sum
      * @desc Sums two numbers
      * @params {Number} m The first number to be summed
      * @params {Number} n The second number to be summed
      * @returns The sum of two numbers
      */
      function sum(m, n) {
        return m + n;
      }
    }


    /**
    * @name render
    * @desc Renders Food into columns of approximately equal height
    * @param {Array} current The current value of `vm.food`
    * @param {Array} original The value of `vm.food` before it was updated
    * @memberOf nomihodai.food.controllers.FoodController
    */
    function render(current, original) {
      if (current !== original) {
        vm.columns = [];

        for (var i = 0; i < 4; ++i) {
          vm.columns.push([]);
        }

        for (var i = 0; i < current.length; ++i) {
          var column = approximateShortestColumn();

          vm.columns[column].push(current[i]);
        }
      }
    }
  }
})();