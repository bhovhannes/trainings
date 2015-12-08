fdescribe('rocketLauncher', function() {

    beforeEach(angular.mock.module('demo'));

    beforeEach(angular.mock.module(function($provide) {
        var mock = jasmine.createSpyObj(
            'randomUtilMock',
            ['getRandomInt']
        );
        $provide.value('randomUtil', mock);
    }));

    describe('default config', function() {
        beforeEach(angular.mock.inject(function(_rocketLauncher_) {
            this.rocketLauncher = _rocketLauncher_;
        }));

        it('should set launchInfo', angular.mock.inject(function(apiToken, randomUtil) {
            randomUtil.getRandomInt.and.returnValue(7);
            this.rocketLauncher.launch();
            var info = this.rocketLauncher.getLaunchInfo();
            expect(info.secretKey).toBe(apiToken + 7);
            expect(info.fuelType).toBe('regular');
        }));
    });

    describe('alternative config', function() {

        beforeEach(function() {
            var module = angular.module('demo');
            module.config(function(rocketLauncherProvider) {
                rocketLauncherProvider.enablePremiumFuelUsage(true);
            });
        });

        beforeEach(angular.mock.inject(function(_rocketLauncher_) {
            this.rocketLauncher = _rocketLauncher_;
        }));

        it('should set launchInfo', angular.mock.inject(function(apiToken, randomUtil) {
            this.rocketLauncher.launch();
            var info = this.rocketLauncher.getLaunchInfo();
            expect(info.fuelType).toBe('premium');
        }));
    });
});
