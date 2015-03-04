(function (define) {
    'use strict';

    define([
        'test/app.spec',
        'app/filters/titleCase.filter'
    ], function (app,titleCaseFilter) {
        var $filter, filter;

        app.filter('titleCase', titleCaseFilter);

        beforeEach(function () {
            inject(function ($injector) {
                $filter = $injector.get('$filter');
                filter = $filter('titleCase');
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
}(this.define));