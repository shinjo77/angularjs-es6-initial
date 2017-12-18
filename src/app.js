require('angular');

const app = angular.module('app', []);

app.controller('mainController', ['$scope', function ($scope) {
    alert('test me4');
    $scope.test3 = 'test me3';
}]);