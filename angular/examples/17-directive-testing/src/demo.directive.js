(function(_module) {
    'use strict';

    _module.directive('wfPanel', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
            },
            template: '<div>\
                        <h2 class="header" style="background:grey"></h2>\
                        <hr/>\
                        <button ng-click="hideBody=!hideBody">Hide Body</button>\
                        <div class="body" ng-hide="hideBody" style="background:green"></div>\
                    </div>',
            link: function(scope, iElement, iAttrs, ctrl, $transclude) {
                scope.hideBody = false;

                var headerEl = iElement[0].querySelector('.header');
                headerEl = angular.element(headerEl);

                var bodyEl = iElement[0].querySelector('.body');
                bodyEl = angular.element(bodyEl);

                $transclude(function(clone/*, transclusionScope*/) {
                    var i;
                    for(i=0; i<clone.length; ++i) {
                        if (!clone[i].hasAttribute) {
                            continue;
                        }
                        if (clone[i].hasAttribute('panel-header')) {
                            headerEl.append(clone[i]);
                        }
                        if (clone[i].hasAttribute('panel-body')) {
                            bodyEl.append(clone[i]);
                        }
                    }
                });
            }
        };
    });

}(angular.module('demo')));
