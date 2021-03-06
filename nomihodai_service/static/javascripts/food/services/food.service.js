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
      all: all,
      search: search
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

    /**
    * @name search
    * @desc Search food by areas and date
    * @param {string} area1_name The name of the first level area
    * @param {string} area2_name The name of the second level area
    * @param {string} date The ISO date string
    * @returns {Promise}
    * @memberOf nomihodai.food.services.Food
    */
    function search(area_name, season, month) {
      area_name = typeof area_name !== 'undefined' ? area_name  : '';
      season = typeof season !== 'undefined' ? season  : '';
      month = ((typeof month !== 'undefined') && (month != '')) ? '([^0-9]|^)' + month + '([^0-9]|$)'  : '';
      return $http.get('/api/v1/nomihodai/?search=' + area_name + ',' + season + ',' + month);
    }

  }
})();