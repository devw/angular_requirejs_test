(function (define, beforeEach) {
    'use strict';

    define([
        'angular',
        'app/app'
    ], function (angular, app) {
        beforeEach(function () {
            // This function registers a module configuration code.
            // It collects the configuration information which will be used when the injector is created by inject.
            angular.mock.module('app');
        });

        return app;
    });
}(this.define, this.beforeEach));
