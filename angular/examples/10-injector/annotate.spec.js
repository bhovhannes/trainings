describe('injector.annotate() method', function() {
    it('should return array of names of services that will be injected - inferred', function() {
        var result = angular.injector().annotate(function($http, greeter) {});
        expect(result).toEqual(['$http', 'greeter']);
    });

    it('should return array of names of services that will be injected - explicit', function() {
        var fn = function(h, g) {};
        fn.$inject = ['$http', 'greeter'];
        var result = angular.injector().annotate(fn);
        expect(result).toEqual(['$http', 'greeter']);
    });

    it('should return array of names of services that will be injected - inline', function() {
        var result = angular.injector().annotate(['$http', 'greeter', function(h, g) {}]);
        expect(result).toEqual(['$http', 'greeter']);
    });
});
