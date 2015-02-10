'use strict';

angular.module('visualReviewExamplePageApp')
  .controller('LoginCtrl', function ($scope, $location) {
    $scope.username = "";
    $scope.password = "";
    $scope.loginInvalid = false;

    $scope.login = function () {
      if ($scope.password !== 's3cret') {
        $scope.loginInvalid = true;
      } else {
        $location.path('/landing-page');
      }
    }
  });
