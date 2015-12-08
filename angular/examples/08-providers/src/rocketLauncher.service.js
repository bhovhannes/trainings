(function(_module) {
    'use strict';

    _module.provider('rocketLauncher', function _rocketLauncherProvider() {

        var usePremiumFuel = false;
        this.enablePremiumFuelUsage = function(bEnable) {
            usePremiumFuel = bEnable;
        };

        var secretKeyMin = 0;
        this.setSecretKeyMin = function(min) {
            secretKeyMin = min;
        };

        var secretKeyMax = 1000;
        this.setSecretKeyMax = function(max) {
            secretKeyMax = max;
        };

        function RocketLauncher(apiToken, randomUtil) {
            var launchInfo;

            this.launch = function() {
                launchInfo = {
                    secretKey: apiToken + randomUtil.getRandomInt(secretKeyMin, secretKeyMax),
                    fuelType: usePremiumFuel ? 'premium' : 'regular'
                };
            };

            this.getLaunchInfo = function() {
                return launchInfo;
            };
        }

        this.$get = ['apiToken', 'randomUtil', function _rocketLauncherFactory(apiToken, randomUtil) {
            return new RocketLauncher(apiToken, randomUtil);
        }];
    });
}(angular.module('demo')));
