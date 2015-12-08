(function(_module) {
    'use strict';

    _module.filter('hexToRgba', function() {
        return function(hex, alpha) {
            if (hex.lastIndexOf('#') > -1) {
                hex = hex.replace(/#/, '0x');
            } else {
                hex = '0x' + hex;
            }
            var r = hex >> 16;
            var g = (hex & 0x00FF00) >> 8;
            var b = hex & 0x0000FF;

            if (alpha !== undefined) {
                alpha = alpha || 1;
                return 'rgba('+r+','+g+','+b+','+alpha+')';
            }
            else {
                return 'rgb('+r+','+g+','+b+')';
            }
        };
    });
}(angular.module('demo')));
