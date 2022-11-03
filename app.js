var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController",
    })
    .when("/second/:num", {
      templateUrl: "pages/second.html",
      controller: "secondController",
    })
    .when("/second", {
      templateUrl: "pages/second.html",
      controller: "secondController",
    });
});
myApp.controller("mainController", [
  "$scope",
  "$log",
  "$location",
  function ($scope, $log, $location) {
    console.log($location.path());
    $scope.a = "Hello there";

    $log.main = "this is mainb";
    $log.log($log);
  },
]);

myApp.controller("secondController", [
  "$scope",
  "$log",
  "$location",
  "$routeParams",
  function ($scope, $log, $location, $routeParams) {
    console.log($location.path());
    console.log("route param", $routeParams);
    $scope.a = $routeParams.num || 1;
    $log.second = "this is second";
    $log.log($log);
  },
]);
