/**
 * Created by tlockhart on 12/10/2016.
 */
var app = angular.module('app', []);
    app.directive("welcome", function() {
        return {
            restrict: "E",
            scope: {},
            //Part2: Tranclude to make content inside element persist
            template: "<div>This is the welcome component</div><ng-transclude> <button>Click this button</button></ng-transclude>"
        }
    });