(function (define, describe, beforeEach, it, expect) {
    'use strict';
    define([
        'jquery',
        'angular',
        'test/app.spec'
    ], function ($, angular) {
        describe('nsStateful', function() {

            var $rootScope,
                el,
                $body = $('body'),
                simpleHtml = '<button ns-stateful="red"></button>';

            beforeEach(function() {
                angular.mock.inject(function ($compile, _$rootScope_) {
                    // The injector unwraps the underscores (_) from around the parameter names when matching
                    $rootScope = _$rootScope_;
                    el = $compile(simpleHtml)($rootScope);
                });

                $body.append(el);
                $rootScope.$digest();
            });

            it('Should should be able to toggle the class based on clicks.', function() {
                expect(el.hasClass('red')).toBeFalsy();
                el.click();
                $rootScope.$digest();
                expect(el.hasClass('red')).toBeTruthy();
            });
        });
    });
}(this.define, this.describe, this.beforeEach, this.it, this.expect));
