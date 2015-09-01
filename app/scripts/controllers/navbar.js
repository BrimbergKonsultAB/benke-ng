'use strict';

/**
 * @ngdoc function
 * @name benkeNgApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the benkeNgApp
 */
angular.module('benkeNgApp')
    .controller('NavbarCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.$location = $location;
    }]);
