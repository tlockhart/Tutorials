/**
 * Created by tlockhart on 12/8/2016.
 */
var app = angular.module('app', []);
app.directive("entering", function(){
    return function(scope, element) {//return linking function, not obj
        element.bind("mouseenter", function(){
            console.log("Mouse has entered the div");
            alert("Mouse has entered the div");
        })
    }
});

app.directive("leaving", function(){
    return function(scope, element) {
        element.bind("mouseleave", function(){
            console.log("Mouse has left the div");
            alert("Mouse has left the div");
        })
    }
});