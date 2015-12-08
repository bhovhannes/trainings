(function(_module) {
    'use strict';

    function RandomUtil() {
        this.getRandomInt = function(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
      };
    }

    _module.service('randomUtil', RandomUtil);

}(angular.module('demo')));
