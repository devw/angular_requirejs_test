(function (define, describe, it, expect) {
    'use strict';
    define([], function () {
        describe('True test', function () {
            it('Should be true', function () {
                expect(true).toBeTruthy();
            });
        });
    });
}(this.define, this.describe, this.it, this.expect));
