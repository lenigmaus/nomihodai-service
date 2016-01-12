/**
* Food
* @namespace nomihodai.food.directives
*/
(function () {
  'use strict';

  angular
    .module('nomihodai.food.directives')
    .directive('food', food);

  /**
  * @namespace Food
  */
  function food() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf nomihodai.food.directives.Food
    */
    var directive = {
      restrict: 'E',
      scope: {
        food: '='
      },
      templateUrl: '/static/templates/food/food.html'
    };

    return directive;
  }
})();