(function (define) {
    'use strict';

    define([
        'views/home.view',
        'angularUiRouter'
    ], function (
        homeView
        ) {
        return ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('/', homeView);
        }];
    });
}(this.define));