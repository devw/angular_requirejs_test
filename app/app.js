(function (define) {
    'use strict';

    define([
        'angular',
        'route',
        'angularUiRouter'
        // './directives/stateful.directive',
        // './controllers/pie.controller',
        // './filters/titleCase.filter'
    ], function (angular, route, pieController, titleCaseFilter) {
        var app = angular.module('app', ['ui.router']);
            // .directive('nsStateful', statefulDirective)
            // .controller('pieController', pieController)
            // .filter('titleCaseFilter', titleCaseFilter);

            app.config(route);

            app.init = function () {
                angular.bootstrap(document, ['app']);
            };

        return app;
    });
}(this.define));
