(function() {
    'use strict';

    describe('hexToRgba', function() {

        beforeEach(angular.mock.module('demo'));

        var hexToRgba;
    	beforeEach(angular.mock.inject(function($filter) {
    		hexToRgba = $filter('hexToRgba');
    	}));

        it('should return rgb(3,4,5) when called with #030405', function() {
    		var color = hexToRgba('#030405');
    		expect(color).toBe('rgb(3,4,5)');
    	});

    	it('should return rgb(255,255,255) when called with FFFFFF', function() {
    		var color = hexToRgba('FFFFFF');
    		expect(color).toBe('rgb(255,255,255)');
    	});

    	it('should return rgba(0,0,0,0.3) when called with #000000 and alpha=0.3', function() {
    		var color = hexToRgba('#000000', 0.3);
    		expect(color).toBe('rgba(0,0,0,0.3)');
    	});

    	it('should return rgba(0,0,0,1) when called with #000000 and alpha=1', function() {
    		var color = hexToRgba('#000000', 1);
    		expect(color).toBe('rgba(0,0,0,1)');
    	});
    });
}());
