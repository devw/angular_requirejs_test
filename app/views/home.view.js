(function (define) {
    'use strict';

    define([
        '../controllers/password.controller',
        'text!../templates/home.html'
    ], function (passwordController, homeTemplate) {

        console.log(passwordController);

        return {
            url: '/',
            template: homeTemplate,
            controller: passwordController
        };
    });
}(this.define));