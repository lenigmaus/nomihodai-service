/**
* Food
* @namespace nomihodai.food.directives
*/
(function () {
  'use strict';

  angular
    .module('nomihodai.food.directives')
    .directive('foodlist', foodlist);

  /**
  * @namespace Food
  */
  function foodlist() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf nomihodai.foodlist.directives.Food
    */
    var directive = {
      controller: 'FoodController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        foodlist: '='
      },
      templateUrl: '/static/templates/food/foodlist.html'
    };

    return directive;
  }
})();