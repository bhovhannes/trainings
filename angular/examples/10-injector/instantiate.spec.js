describe('injector.instantiate() method', function() {
    it('should create a new instance of Type', angular.mock.inject(function($injector) {
        function Car(color, $http, speed) {
            this.color = color;
            this.speed = speed;
            this.$http = $http;
        }

        var obj = $injector.instantiate(Car, {
            speed: '200km/h',
            color: 'red'
        });

        expect(obj instanceof Car).toBe(true);
        expect(obj.color).toBe('red');
        expect(obj.speed).toBe('200km/h');
    }));

    it('should create a new instance of Type without injecting Angular services', function() {
        function Car(color, speed) {
            this.color = color;
            this.speed = speed;
        }

        var obj = angular.injector().instantiate(Car, {
            color: 'red',
            speed: '200km/h'
        });

        expect(obj instanceof Car).toBe(true);
        expect(obj.color).toBe('red');
        expect(obj.speed).toBe('200km/h');
    });
});
