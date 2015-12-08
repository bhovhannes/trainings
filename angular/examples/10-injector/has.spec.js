describe('injector.has() method', function() {
    it('should check if the given service exists', angular.mock.inject(function($injector) {
        expect($injector.has('$http')).toBe(true);
        expect($injector.has('foo')).toBe(false);
    }));
});
