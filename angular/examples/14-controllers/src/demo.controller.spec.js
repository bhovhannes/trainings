(function() {
    'use strict';

    describe('DemoCtrl', function() {

        beforeEach(angular.mock.module('demo'));

        var scope,
            ctrl;
    	beforeEach(angular.mock.inject(function($rootScope, $controller) {
    		scope = $rootScope.$new();
            ctrl = $controller('DemoCtrl', {$scope: scope});
    	}));

        it('should initialize list of users', function() {
    		expect(scope.users.length).toBeGreaterThan(0);
    	});

        it('should sort users by age', function() {
            scope.users = [
                {name: 'A', age: 2},
                {name: 'B', age: 1}
            ];
            scope.sortUsersBy('age');
            expect(scope.users[0].age).toBeLessThan(scope.users[1].age);
    	});
    });
}());
