var myApp = angular.module("myApp", []);

myApp.controller("mainController", [
  "$scope",
  "$log",
  "$filter",
  "$timeout",
  function ($scope, $log, $filter, $timeout) {
    $scope.handle = "";

    $scope.lowercasehandle = function () {
      return $filter("lowercase")($scope.handle);
    };

    $scope.$watch("handle", function (newVAlue, oldValue) {
      console.log("CChanged");
      console.log("old value", oldValue);
      console.log("new value", newVAlue);
    });

    $scope.characters = 5;

    $scope.rules = [
      {
        rulename: "must be 5 vcharts",
      },
      {
        rulename: "must be cool",
      },
      {
        rulename: "must be stars",
      },
    ];
  },
]);
