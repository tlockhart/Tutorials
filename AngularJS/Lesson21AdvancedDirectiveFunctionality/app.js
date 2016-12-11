/**
 * Created by tlockhart on 12/9/2016.
 */
/*Part 1:activeClass Style not sent as attribute: */
var app = angular.module('app', []);
    /*app.directive("entering", function(){
        return function(scope, element) {
            element.bind("mouseenter", function(){
                element.addClass("activeClass");
            })
        }
    });

    app.directive("leaving", function(){
        return function(scope, element) {
            element.bind("mouseleave", function(){
                element.removeClass("activeClass");
            })
        }
    });*/

/*Part2: Send activeClass style as attribute:*/
    app.directive("entering", function(){
        return function(scope, element, attrs) {
            element.bind("mouseenter", function(){
                element.addClass(attrs.entering);
            })
        }
    });

    app.directive("leaving", function(){
        return function(scope, element, attrs) {
            element.bind("mouseleave", function(){
                element.removeClass(attrs.entering);
            })
        }
    });
