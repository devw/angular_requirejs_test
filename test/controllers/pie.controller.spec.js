(function (define, describe, beforeEach, it, expect) {
    'use strict';

    define([
        'angular',
        'test/app.spec'
    ], function (angular) {
        describe('pieController', function () {

            var $scope = {};

            beforeEach(function () {
                angular.mock.inject(function ($controller) {
                    // The injector unwraps the underscores (_) from around the parameter names when matching
                    $controller('pieController', { $scope: $scope });
                });
            });

            describe('Initialization', function () {
                it('should instantiate slice to 8', function () {
                    expect($scope.slices).toEqual(8);
                });
            });

            describe('$scope.slices', function () {
                it('sets the strength to "strong" if the password length is >8 chars', function () {
                    $scope.eatSlice();
                    expect($scope.slices).toEqual(7);
                });
            });
        });
    });
}(this.define, this.describe, this.beforeEach, this.it, this.expect));
