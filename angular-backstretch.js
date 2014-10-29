/*
 * Title: ngBackstretch
 * Description: An angular directive to assist the use of jQuery Backstretch.
 *              A plugin by Robbin & Co http://srobbin.com/jquery-plugins/backstretch/
 * Version: 1.0.0
 * Authors: Steven Collier, Erik Zettersten
 */
(function() {

    /* Start ngBackstretch */

    'use strict';

    angular.module('ngBackstretch', [])

    .directive('ngBackstretch', [

        function() {

            if (typeof $.fn.backstretch !== 'function')
                throw new Error('ngBackstretch | Please make sure the jquery backstretch plugin is included before this directive is added.')

            return {
                restrict: 'A',
                scope: {
                    backstretchConfiguration: '='
                },
                link: function(scope, element, attr) {

                    var images = scope.backstretchConfiguration.images || [];
                    var options = scope.backstretchConfiguration.options || {};

                    if (images.length == 0)
                        throw new Error('myBackstretch | You have not declared an image to be stretched.');

                    if (element.context.toString().match(/HTMLBodyElement/gi) || options.bodyBackground)
                        return $.backstretch(images, options);
                    
                    $(element).backstretch(images, options);

                }
            }

        }

    ]);

}).call(this);
