(function() {
    function MyController($interval, $scope) {
        var updateClock = function() {
            $scope.clock = new Date();
        };
        $interval(updateClock, 1000);
        updateClock();
    }

    var clockModule = angular.module('clock', []);
    clockModule.controller('MyController', MyController);
})();
