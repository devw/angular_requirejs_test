(function (define, module, beforeEach) {
    'use strict';

    define([
        'app/app'
    ], function (app) {
        beforeEach(function () {
            module('app');
        });

        return app;
    });
}(this.define, this.module, this.beforeEach));
