/**
 * Created by tlockhart on 12/16/2016.
 */
var app = angular.module("app",[]);
//Clock Directive Component Example
app.directive("clock", function () {
    return {
        restrict: 'E',//Element
        scope: {
            timezone: "@"//linked to timezone attribute in clock element data
        },
        template: "<div>12:00pm {{timezone}}</div>"//What to return in the view
    };
});
//Panel Directive Container Example,  Clock directive is called inside Panel
// Element.  Each instance of the Clock element is passed new data.
app.directive("panel", function () {
    return {
        restrict: "E",
        transclude: true,
        scope: {
            title: "@"
        },
        template: "<div style='border: 3px solid #000000'>" +
        "<div class='alert-box'>{{title}}</div>" +
        "<div ng-transclude></div></div>"
    };
});