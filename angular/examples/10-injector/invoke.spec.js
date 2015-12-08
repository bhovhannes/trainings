describe('injector.invoke() method', function() {

    it('should set this and pass arguments for invoked method', function() {
        function sum(a, b) {
            return this.name + (a + b);
        }

        var result = angular.injector().invoke(
            sum,
            {
                name: 'Sum:'
            },
            {
                a: 3,
                b: 2
            }
        );
        expect(result).toBe('Sum:5');
    });

});
