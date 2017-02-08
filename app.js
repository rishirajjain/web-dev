'use strict';

// Define the `myApp` module
var myApp = angular.module('myApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
myApp.controller('listController', function listController($scope) {
  $scope.user = [
    {
      name: 'Rishi',

    }, {
      name: 'Anant',

    }, {
      name: 'Mihir',

    }
  ];
});
