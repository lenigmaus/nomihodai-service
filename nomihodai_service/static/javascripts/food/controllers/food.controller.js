/**
* FoodController
* @namespace nomihodai.food.controllers
*/
(function () {
  'use strict';

  angular
    .module('nomihodai.food.controllers')
    .controller('FoodController', FoodController);

  FoodController.$inject = ['$scope', '$window'];

  /**
  * @namespace FoodController
  */
  function FoodController($scope, $window) {
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
    * @name calculateNumberOfColumns
    * @desc Calculate number of columns based on screen width
    * @returns {Number} The number of columns containing Trips
    * @memberOf trekhunt.trips.controllers.TripsControllers
    */
    function calculateNumberOfColumns() {
      var width = $window.innerWidth;

      if (width >= 1200) {
        return 6;
      } else if (width >= 992) {
        return 4;
      } else if (width >= 768) {
        return 2;
      } else {
        return 1;
      }
      return 4;
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
          return element.long_desc.length;
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

        for (var i = 0; i < calculateNumberOfColumns(); ++i) {
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