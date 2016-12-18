/**
 * Created by tlockhart on 12/18/2016.
 */
var app = angular.module('phoneApp', []);
app.controller("AppCtrl", function ($scope) {
    $scope.callHome = function (message) {
        alert(message);
    };
});

app.directive("phone", function () {
    return {
        scope: {
            //The “&” operator allows you to invoke or evaluate an expression
            //on the parent scope on the element, where the directive is inside.
            dial: "&"
        },
        //With the "&" operator,  it is possible to pass data into a
        //scoped method within the template({message:value}).
        template: '<input type="text" ng-model="value">' +
            //Makes clickable text
        '<div class="button" ng-click="dial({message:value})">' +
        'Call home!</div>',
    };
});