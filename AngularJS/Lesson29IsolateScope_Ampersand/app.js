/**
 * Created by tlockhart on 12/17/2016.
 */
var app = angular.module('drinkApp', []);

app.controller("AppCtrl", function ($scope) {
   /*Part2* ctrlFlavor scope variable property/
   $scope.ctrlFlavor = "blackberry";
})

//drink directive
app.directive("drink", function () {
    return {
        scope: {
            //Part2: @ operator extract an attribute
            // by name, and assign it to the scope.
            //
            // The interpolated ctrlFlavor inside the flavor
            // attribute value will evaluate to “blackberry” for
            // the drink directive.
            flavor: "@"
        },
        template: '<div>{{ flavor }}</div>',
        /*Part1:*/
        /*link: function (scope, element, attrs) {
            scope.flavor = attrs.flavor;
        }*/
    };
})