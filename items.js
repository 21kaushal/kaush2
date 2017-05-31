app.factory('statesData', [
  function () {

      getStates = function () {
          return [
              {
                  "id": 1,
                  "name": "Alabama",
                  "abbreviation": "AL"
              },
              {
                  "id": 2,
                  "name": "Alaska",
                  "abbreviation": "AK"
              },
              {
                  "id": 58,
                  "name": "Wisconsin",
                  "abbreviation": "WI"
              },
              {
                  "id": 59,
                  "name": "Wyoming",
                  "abbreviation": "WY"
              }
          ];


      };

      return {
          getStates: getStates
      };
  }]);