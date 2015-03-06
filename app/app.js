(function (define) {
    'use strict';

    define([
        'angular',
        'app/directives/stateful.directive',
        'app/controllers/pie.controller',
        'app/filters/titleCase.filter'
    ], function (angular, statefulDirective, pieController, titleCaseFilter) {
        return angular.module('app', [])
            .directive('nsStateful', statefulDirective)
            .controller('pieController', pieController)
            .filter('titleCaseFilter', titleCaseFilter);
    });
}(this.define));
