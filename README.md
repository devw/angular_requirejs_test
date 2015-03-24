[![Build Status](https://travis-ci.org/devw/angular-requirejs-karma-showcase.svg?branch=master)](https://travis-ci.org/devw/angular-requirejs-karma-showcase)

## angular-requirejs-karma-showcase

1. Copy the repository named angular-karma-requirejs

        > git clone ......
  
2. Install the libraries

        >npm install
        >bower install
    
3. Remove the existing karma.conf.js and generate another one responding to the questions in this way:

        >node_modules/karma/bin/karma init
    
        Which testing framework do you want to use ? jasmine
        Do you want to use Require.js ? yes
        What is the location of your source and test files ? test/*js
        Do you wanna generate a bootstrap file for RequireJS? yes

4. Try to run the test

        > node_modules/karma/bin/karma start # you should get an error because some package is missing
        > npm install <missing package> --save
        > node_modules/karma/bin/karma start # it should run succesfully the test/test.js
      
5. Write the test using the IIFE pattern

        # test/test.js
        (function (define, describe, it) {
            define([
            ], function () {
                describe('True test', function() {
                    it('Should be true', function() {
                        expect(true).toBeTruthy();
                    });
                });
            });
        }(define, describe, it));

      
      
Suggestions:

  1. the missing package of (4) is karma-requirejs
