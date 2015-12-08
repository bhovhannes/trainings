(function() {
    'use strict';

    describe('randomUtil', function() {

        beforeEach(angular.mock.module('demo'));

        var randomUtil;
    	beforeEach(inject(function(_randomUtil_) {
    		randomUtil = _randomUtil_;
    	}));

        describe('getRandomInt', function() {
            beforeEach(function() {
                spyOn(Math, 'random');
            });

            it('should always return value less than max', function() {
        		Math.random.and.returnValue(0.999999);
                var actualResult = randomUtil.getRandomInt(10, 1000);
                expect(actualResult).toBeLessThan(1000);
        	});

            it('should always return value greater than min', function() {
        		Math.random.and.returnValue(0);
                var actualResult = randomUtil.getRandomInt(10, 1000);
                expect(actualResult >= 10).toBe(true);
        	});
        });
    });
}());
