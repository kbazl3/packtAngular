angular.module("myApp")
    .controller("mainCtrl", function($scope) {

      function AppCtrl($scope) {
        $scope.name = "World";
      }

      // if ($scope.color === "orange") {
      //   document.getElementByTagName("h1").style.color = "blue";
      // }


    });
