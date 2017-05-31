var app = angular.module('tool', ['ui.grid', 'ui.grid.edit', 'ui.bootstrap', 'ngTouch', 'ui.grid.rowEdit', 'ui.grid.cellNav']);

app.factory('statesData', [
  function () {

      getStates = function () {
          return [
              {
                  "id": 1,
                  "name": "soup",
                  "abbreviation": "AL"
              },
              {
                  "id": 2,
                  "name": "sugar",
                  "abbreviation": "AK"
              },
              {
                  "id": 58,
                  "name": "curry",
                  "abbreviation": "WI"
              },
              {
                  "id": 59,
                  "name": "drinks",
                  "abbreviation": "WY"
              }
          ];


      };

      return {
          getStates: getStates
      };
  }]);

app.controller('MainCtrl', function($scope, statesData) {
  $scope.name = 'Typeahead';
  
  $scope.states = statesData.getStates();
  
  $scope.myData = [
    {
      id: 1,
      state: {
        "id": 1,
        "name": "tundae",
        "abbreviation": "AL"
      },
      item: {
        "id": 1,
        "name": "chicken",
        "abbreviation": "AL"
      },

      qty: 50
    },
    {
      id: 2,
      state: {
        "id": 5,
        "name": "cakes",
        "abbreviation": "AR"
      },
      item: {
        "id": 1,
        "name": "chicken",
        "abbreviation": "AL"
      },

      qty: 50
    },
    {
      id: 3,
      state: {
        "id": 9,
        "name": "burgers",
        "abbreviation": "DE"
      },
      item: {
        "id": 18,
        "name": "rajma",
        "abbreviation": "AL"
      },
      
      qty: 34
    },
    {
      id: 4,
      state: {
        "id": 12,
        "name": "pizza",
        "abbreviation": "FL"
      },
      item: {
        "id": 1,
        "name": "chicken",
        "abbreviation": "AL"
      },
                      
      qty: 50
    },
    {
      id: 5,
      state: {
        "id": 15,
        "name": "Hawaii",
        "abbreviation": "HI"
      },
      item: {
        "id": 21,
        "name": "kebab",
        "abbreviation": "AL"
      },
      

      qty: 50
    }
  ];  
  
  $scope.cellStateEditableTemplate = '<div class="typeaheadcontainer"><input type="text" ' +
    'class="typeaheadcontrol"' +
    'ng-model="MODEL_COL_FIELD" ' +
    'uib-typeahead="name as state.name for state in grid.appScope.states | filter:$viewValue | limitTo:8" ' +
    'ng-required="true" ' +
    'typeahead-editable ="false"' +
    'typeahead-on-select="grid.appScope.typeaheadSelected(row.entity, $item)" ' +
    '/></div>';


 $scope.typeaheadSelected = function(entity, selectedItem) {
    entity.state = selectedItem;
 };
  
  $scope.addComp = function() {
    $scope.myData.push({
            id: 00,
            state: {
              id: 00,
              name: '',
              abbreviation: ''
            },
            item: {
             id: 1,
          name: '',
          abbreviation: "AL"
            },
            qty: 56,
    });
  };

 $scope.gridOptions = {
    data: 'myData',
    enableRowSelection: false,
    enableCellEditOnFocus: true,
    multiSelect: false,
    columnDefs: [
      {
        field: 'state.name',
        displayName: 'Item Name',
        enableCellEditOnFocus: true,
        editableCellTemplate: $scope.cellStateEditableTemplate,
        cellTemplate: $scope.cellStateEditableTemplate
      },
      {
        field: 'state.id',
        displayName: 'Item ID',
      },
      {
        field: 'item.name',
        displayName: 'Component Name',
        enableCellEditOnFocus: true,
        editableCellTemplate: $scope.cellStateEditableTemplate,
        cellTemplate: $scope.cellStateEditableTemplate
      },
      {
        field: 'item.id',
        displayName: 'Component ID',
      },
      {
        field: 'qty', displayName: 'Quantity', enableCellEdit: false
      }
    ]
 };
  
});