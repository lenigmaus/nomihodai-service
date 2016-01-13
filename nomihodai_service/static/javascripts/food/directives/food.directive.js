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
      controller: ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.monthSelected = function (month) {
          $rootScope.month = month;
          console.log($rootScope)
        }
      }],
      restrict: 'E',
      scope: {
        food: '='
      },
      templateUrl: '/static/templates/food/food.html',
      link: function(scope){
        scope.months = scope.food.recommended_months.split(",")
      }
    };

    return directive;
  }
})();
