(function (define) {
    'use strict';

    define([
    ], function () {
        return function () {
            return function (val) {
                return val ? val.replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }) : val;
            };
        }
    });
}(this.define));
