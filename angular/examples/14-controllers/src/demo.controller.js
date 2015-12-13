(function(_module) {
    'use strict';

    function DemoController($scope, $filter) {
        $scope.users = [
            {name: 'Kevin', age: 10},
            {name: 'Bob', age: 3},
            {name: 'Stuart', age: 5}
        ];

        $scope.sortUsersBy = function(property) {
            var sortBy = $filter('orderBy');
            $scope.users = sortBy($scope.users, property);
        };
    }

    _module.controller('DemoCtrl', DemoController);

}(angular.module('demo')));
