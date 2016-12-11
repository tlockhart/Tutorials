/**
 * Created by tlockhart on 12/9/2016.
 */
function FunCtrl() {
    var self = this;

    self.start = function() {
        console.log("Fun times have been started!");
        alert("Fun times have been started!");
    }

    self.end = function() {
        console.log("Fun time is over.");
        alert("Fun time is over.");
    }

}

var app = angular.module('app', []);

app.controller('FunCtrl', FunCtrl);
    app.directive("entering", function(){
        return function(scope, element, attrs) {
            element.bind("mouseenter", function(){
                /*Part1: Calling functions with a binding variable */
                /*scope.fun.start(); */

                /*Part2: Using scope apply to look for changes in data.  Explicitly call for data refresh check*/
                /*scope.$apply("fun.start()");*/

                /*Part 3:  Calling Function by passing it as an attribute, lets Angular take care of data refresh*/
                scope.$apply(attrs.entering);
            })
        }
    }),
    app.directive("entering", function(){
        return function(scope, element, attrs) {
            element.bind("mouseleave", function(){
                /*Part1: Calling functions with a binding variable */
                /*scope.fun.start(); */

                /*Part2: Using scope apply to look for changes in data.  Explicitly call for data refresh check*/
                /*scope.$apply("fun.start()");*/

                /*Part 3:  Calling Function by passing it as an attribute, lets Angular take care of data refresh*/
                scope.$apply(attrs.leaving);
            })
        }
    });