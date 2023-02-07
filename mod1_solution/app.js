(function () {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchController', LunchController);
    LunchController.$inject = ['$scope'];
    function LunchController($scope) {
        $scope.dishes = "";
        $scope.msg = "";
        $scope.check = false;
        $scope.checkLunch = function() {
            if ($scope.dishes.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.check = true;
                $scope.empty = false;
                var arrayDishes = $scope.dishes.split(',');
                if (arrayDishes.length <= 3) {
                    $scope.msg = "Enjoy!";
                } else {
                    $scope.msg = "Too Much!";
                }
            }
        }
    }
})();
