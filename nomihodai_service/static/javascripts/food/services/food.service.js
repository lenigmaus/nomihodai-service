/**
* Food
* @namespace nomihodai.food.services
*/
(function () {
  'use strict';

  angular
    .module('nomihodai.food.services')
    .factory('Food', Food);

  Food.$inject = ['$http'];

  /**
  * @namespace Food
  * @returns {Factory}
  */
  function Food($http) {
    var Food = {
      all: all
    };

    return Food;

    ////////////////////

    /**
    * @name all
    * @desc Get all Food
    * @returns {Promise}
    * @memberOf nomihodai.food.services.Food
    */
    function all() {
      return $http.get('/api/v1/nomihodai/');
    }
  }
})();