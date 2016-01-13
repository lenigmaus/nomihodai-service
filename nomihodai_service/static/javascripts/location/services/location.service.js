/**
* LocationService
* @namespace nomihodai.food.services
*/
(function () {
  'use strict';

  angular
    .module('nomihodai.food.services')
    .factory('LocationService', LocationService);

  LocationService.$inject = ['$http'];

  /**
  * @namespace LocationService
  * @returns {Factory}
  */
  function LocationService($http) {
    var LocationService = {
      all: all
    };

    return LocationService;

    ////////////////////

    /**
    * @name all
    * @desc Get all LocationService
    * @returns {Promise}
    * @memberOf nomihodai.food.services.LocationService
    */
    function all() {
      //return $http.get('./locations.json');
      //return $http.get('/api/v1/nomihodai/');
      return [
  {
    "mainarea": {
      "name": "Hokkaido",
      "id": "hokkaido"
    },
    "subareas": [
      {
        "name": "Iwamisawa",
        "id": "iwamisawa"
      },
      {
        "name": "Wakkanai",
        "id": "wakkanai"
      },
      {
        "name": "Chitose",
        "id": "chitose"
      },
      {
        "name": "Asahikawa",
        "id": "asahikawa"
      },
      {
        "name": "Shiretoko",
        "id": "shiretoko"
      },
      {
        "name": "Otaru",
        "id": "otaru"
      },
      {
        "name": "Kushiro",
        "id": "kushiro"
      },
      {
        "name": "Toyako",
        "id": "toyako"
      },
      {
        "name": "Tokachi",
        "id": "tokachi",
      },
      {
        "name": "Hakodate",
        "id": "hakodate"
      }
    ]
  },
  {
    "mainarea": {
      "name": "Touhoku",
      "id": "touhoku"
    },
    "subareas": [
      {
        "name": "Aomori",
        "id": "aomori"
      },
      {
        "name": "Akita",
        "id": "akita"
      },
      {
        "name": "Yamagata",
        "id": "yamagata"
      },
      {
        "name": "Iwate",
        "id": "iwate"
      },
      {
        "name": "Miyagi",
        "id": "miyagi"
      },
      {
        "name": "Fukushima",
        "id": "fukushima"
      }
    ]
  },
  {
    "mainarea": {
      "name": "Kantou",
      "id": "kantou"
    },
    "subareas": [
      {
        "name": "Gunma",
        "id": "gunma"
      },
      {
        "name": "Saitama",
        "id": "saitama"
      },
      {
        "name": "Kanagawa",
        "id": "kanagawa"
      },
      {
        "name": "Tochigi",
        "id": "tochigi"
      },
      {
        "name": "Ibaraki",
        "id": "ibaraki"
      },
      {
        "name": "Chiba",
        "id": "chiba"
      }
    ]
  },
  {
    "mainarea": {
      "name": "Izuhakone",
      "id": "izuhakone"
    },
    "subareas": [
      {
        "name": "Hakone",
        "id": "hakone"
      },
      {
        "name": "Izu",
        "id": "izu"
      }
    ]
  },
  {
    "mainarea": {
      "name": "Koushinetsu",
      "id": "koushinetsu"
    },
    "subareas": [
      {
        "name": "Nagano",
        "id": "nagano"
      },
      {
        "name": "Yamanashi",
        "id": "yamanashi"
      },
      {
        "name": "Niigata",
        "id": "niigata"
      }
    ]
  },
  {
    "mainarea": {
      "name": "Tokai Hokuriku",
      "id": "tokai_hokuriku"
    },
    "subareas": [
      {
        "name": "Ishikawa",
        "id": "ishikawa"
      },
      {
        "name": "Fukui",
        "id": "fukui"
      },
      {
        "name": "Mie",
        "id": "mie"
      },
      {
        "name": "Shizuoka",
        "id": "shizuoka"
      },
      {
        "name": "Toyama",
        "id": "toyama"
      },
      {
        "name": "Gifu",
        "id": "gifu"
      },
      {
        "name": "Aichi",
        "id": "aichi"
      }
    ]
  },
  {
    "mainarea": {
      "name": "Kinki",
      "id": "kinki"
    },
    "subareas": [
      {
        "name": "Kyoto",
        "id": "kyoto"
      },
      {
        "name": "Hyogo",
        "id": "hyogo"
      },
      {
        "name": "Wakayama",
        "id": "wakayama"
      },
      {
        "name": "Shiga",
        "id": "shiga"
      },
      {
        "name": "Osaka",
        "id": "osaka"
      },
      {
        "name": "Nara",
        "id": "nara"
      }
    ]
  },
  {
    "mainarea": {
      "name": "Chugoku",
      "id": "chugoku"
    },
    "subareas": [
      {
        "name": "Shimane",
        "id": "shimane"
      },
      {
        "name": "Okayama",
        "id": "okayama"
      },
      {
        "name": "Hiroshima",
        "id": "hiroshima"
      },
      {
        "name": "Tottori",
        "id": "tottori"
      },
      {
        "name": "Yamaguchi",
        "id": "yamaguchi"
      }
    ]
  },
  {
    "mainarea": {
      "name": "Shikoku",
      "id": "shikoku"
    },
    "subareas": [
      {
        "name": "Ehime",
        "id": "ehime"
      },
      {
        "name": "Kagawa",
        "id": "kagawa"
      },
      {
        "name": "Kouchi",
        "id": "kouchi"
      },
      {
        "name": "Tokushima",
        "id": "tokushima"
      }
    ]
  },
  {
    "mainarea": {
      "name": "Kyusyu/Okinawa",
      "id": "kyusyu_okinawa"
    },
    "subareas": [
      {
        "name": "Saga",
        "id": "saga"
      },
      {
        "name": "Fukuoka",
        "id": "fukuoka"
      },
      {
        "name": "Nagasaki",
        "id": "nagasaki"
      },
      {
        "name": "Oita",
        "id": "oita"
      },
      {
        "name": "Kumamoto",
        "id": "kumamoto"
      },
      {
        "name": "Miyazaki",
        "id": "miyazaki"
      },
      {
        "name": "Kagoshima",
        "id": "kagoshima"
      },
      {
        "name": "Okinawa",
        "id": "okinawa"
      }
    ]
  }
];
    }

  }
})();