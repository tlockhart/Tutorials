/**
 * Created by tlockhart on 12/10/2016.
 */
var app = angular.module('app', []);
app.directive("welcome", function () {
    return {
        restrict: "E",
        //Part3: Isolate Scope, so each directive is local only to that directive instance.
        scope: {},
        controller: function ($scope) {
            $scope.words = [];

            this.sayHello = function () {
                $scope.words.push("hello");
            };

            this.sayHowdy = function () {
                $scope.words.push("howdy");
            };

            this.sayHi = function () {
                $scope.words.push("hi");
            };
        },

        link: function (scope, element) {
            element.bind("mouseenter", function () {
                console.log(scope.words);
                alert(scope.words);
            });
        }
    }
}),
app.directive("hello", function () {
    return {
        require: "welcome",
        link: function (scope, element, attrs, welcomeCtrl) {
            welcomeCtrl.sayHello();
        }
    };
}),
app.directive("howdy", function () {
    return {
        require: "welcome",
        link: function (scope, element, attrs, welcomeCtrl) {
            welcomeCtrl.sayHowdy();
        }
    };
}),
app.directive("hi", function () {
    return {
        require: "welcome",
        link: function (scope, element, attrs, welcomeCtrl) {
            welcomeCtrl.sayHi();
        }
    };
});
