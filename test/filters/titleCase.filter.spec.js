(function (define, describe, expect, beforeEach, it) {
    'use strict';

    define([
        'angular',
        'test/app.spec'
    ], function (angular) {
        describe('Title Case Filter', function() {
            var $filter, filter;

            beforeEach(function () {
                angular.mock.inject(function ($injector) {
                    $filter = $injector.get('$filter');
                    filter = $filter('titleCaseFilter');
                });
            });

            it('Should return undefine ', function() {
                expect(filter(undefined)).toBeUndefined();
            });

            it('Should change the casing of lower case words...', function() {
                expect(filter('antonio pierro')).toEqual('Antonio Pierro');
            });

            it('Should change the case of random...', function() {
                expect(filter('aNtOniO pIERRo')).toEqual('Antonio Pierro');
            });

            it('Should works fine with a normal phrase', function () {
                expect(filter('Hello World')).toEqual('Hello World');
            });
        });
    });
}(this.define, this.describe, this.expect, this.beforeEach, this.it));