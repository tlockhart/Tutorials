/**
 * Created by tlockhart on 12/18/2016.
 */
var app = angular.module('drinkApp', []);

app.controller("AppCtrl", function ($scope) {
    $scope.ctrlFlavor = "blackberry";
})

app.directive("drink", function () {
    return {
        scope: {
            // = operator expects an object which it can bind to.
            flavor: "="
        },
        template: '<div>{{ flavor }}</div>',
    };
});
