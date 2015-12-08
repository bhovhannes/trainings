describe('injector.get() method', function() {
    it('should return instance of service', angular.mock.inject(function($injector) {
        var result = $injector.get('$http');
        expect(result.get).toBeDefined();
        expect(result.post).toBeDefined();
    }));
});
