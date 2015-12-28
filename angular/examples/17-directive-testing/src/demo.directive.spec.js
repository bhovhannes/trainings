(function() {
    'use strict';

    describe('wfPanel directive', function() {

        beforeEach(angular.mock.module('demo'));

        var scope;
    	beforeEach(angular.mock.inject(function($rootScope) {
    		scope = $rootScope.$new();
            scope.headerText = 'aaa',
            scope.bodyText = 'bbb';
    	}));

        var $directiveEl;
        beforeEach(angular.mock.inject(function($compile) {
            var tpl = '<wf-panel>\
                    <div panel-header>{{ headerText }}</div>\
                    <div panel-body>\
                        {{bodyText}}\
                    </div>\
                </wf-panel>\
            ';
            var $el = angular.element(tpl);
            $directiveEl = $compile($el)(scope);
            scope.$digest();
    	}));

        it('should transclude header element', function() {
            var headerEl = $directiveEl[0].querySelector('.header');
            expect(headerEl).toBeDefined();
            expect(headerEl.innerHTML.indexOf(scope.headerText)>=0).toBe(true);

            scope.headerText = 'aaa2';
            scope.$digest();
            expect(headerEl.innerHTML.indexOf(scope.headerText)>=0).toBe(true);
        });

        it('should hide panel body when button is clicked first time', function() {
            var bodyEl = $directiveEl[0].querySelector('.body');
            var $bodyEl = angular.element(bodyEl);
            expect($bodyEl.hasClass('ng-hide')).toBe(false);
            var $btnEl = $directiveEl.find('button');
            $btnEl.triggerHandler('click');
            expect($bodyEl.hasClass('ng-hide')).toBe(true);
        });
    });
}());
