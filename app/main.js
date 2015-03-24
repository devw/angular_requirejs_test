// app/main.js
(function (requirejs) {
    'use strict';

    var vendorDir = '../bower_components/';

    requirejs.config({
        urlArgs: 'bust=' + Date.now(),
        paths: {
            angular: vendorDir + 'angular/angular',
            angularUiRouter: vendorDir + 'angular-ui-router/release/angular-ui-router',
            text: vendorDir + 'text/text'
            // jquery: vendorDir + 'jquery/dist/jquery'
        },
        shim: {
            angular : {
                exports : 'angular'
            },
            angularUiRouter: ['angular']
        }
        // deps: ['app']
    });

    require(['app'], function (app) {
        app.init();
    });
}(this.requirejs));