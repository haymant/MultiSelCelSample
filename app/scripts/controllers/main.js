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
  });
