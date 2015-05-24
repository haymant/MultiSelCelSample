'use strict';

/**
 * @ngdoc function
 * @name gitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gitApp
 */
angular.module('gitApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.data=[{name:"Haymant Lee", gender:1, project: "multi, cart"},
		{name:"Hulk", gender:1, project: "avenger, yii"},
		{name:"Black Widow", gender: 2, project: "avenger"}];
    $scope.gridOptions = {data:$scope.data};
    $scope.gridOptions.columnDefs = [
    { name: 'name', displayName: 'Name', width: '20%' },
    { name: 'gender', displayName: 'Gender', editableCellTemplate: 'ui-grid/dropdownEditor', width: '20%',
      cellFilter: 'mapGender', editDropdownValueLabel: 'gender', editDropdownOptionsArray: [
        { id: 1, gender: 'male' },
        { id: 2, gender: 'female' }
      ] 
    },
    { name: 'project', displayName: 'Project', width: '30%' },
  ];
  })
.filter('mapGender', function() {
  var genderHash = {
    1: 'male',
    2: 'female'
  };

  return function(input) {
    if (!input){
      return '';
    } else {
      return genderHash[input];
    }
  };
});
