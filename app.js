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

myApp.service("nameService", function () {
  var self = this;
  this.name = "John oe";
  this.namelength = function () {
    return self.name.length;
  };
});

myApp.controller("mainController", [
  "$scope",
  "$log",
  "$location",
  "nameService",
  function ($scope, $log, $location, nameService) {
    $scope.people = [
      {
        name: "Alex",
        age: 12,
        city: "haloi",
        state: "HL",
        zip: "12354",
      },
      {
        name: "Kim",
        age: 34,
        city: "xinz",
        state: "HL",
        zip: "234",
      },
    ];

    $scope.formatFunction = function (person) {
      return `${person.name} ${person.age} ${person.city}`;
      //return "this is pain";
    };
  },
]);

myApp.controller("secondController", [
  "$scope",
  "$log",
  "$location",
  "$routeParams",
  "nameService",
  function ($scope, $log, $location, $routeParams, nameService) {
    $scope.person = {
      name: "Alex",
      age: 12,
      city: "haloi",
      state: "HL",
      zip: "12354",
    };

    $scope.formatFunction = function () {
      //return `${person.name} ${person.age} ${person.city}`;
      return "this is pain";
    };
  },
]);

myApp.directive("searchResult", function () {
  return {
    restrict: "AECM",
    templateUrl: `directives/searchResult.html`,
    replace: true,
    scope: {
      personObject2: "=personObject",
      formatFunction: "&",
    },
    compile: function (elem, attrs) {
      console.log("compiling ");
      console.log(elem.html());
      return {
        post: function (scope, element, attrs) {
          console.log("post-linking");
          console.log(element, scope);
        },
      };
    },
  };
});
