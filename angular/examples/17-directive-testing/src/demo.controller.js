(function(_module) {
    'use strict';

    _module.controller('DemoCtrl', ['$scope', function($scope) {
        $scope.headerText = 'PanelHeader';
        $scope.items = [
            {
                name: 'Bob'
            },
            {
                name: 'Kevin'
            },
            {
                name: 'Stuart'
            }
        ];
    }]);

}(angular.module('demo')));
