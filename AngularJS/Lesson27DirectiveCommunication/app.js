/**
 * Created by tlockhart on 12/16/2016.
 */
var app = angular.module("app",[]);

app.directive("country", function () {
    return {
        restrict: "E",
        controller: function () {
            this.makeAnnouncement = function (message) {
                console.log("Country says: " + message);
                alert("Country says: " + message);
            };
        }
    };
});
app.directive("state", function () {
    return {
        restrict: "E",
        controller: function () {
            this.makeLaw = function (law) {
                console.log("Law: " + law);
                alert("Law: " + law);
            };
        }
    };
});
app.directive("city", function () {
    return {
        restrict: "E",
        require: ["^country","^state"],
        //The city directive can inherit the controller of the country directive, by linking.
        // This is accomplished by matching the require naming scheme to the parent directive name.
        // With this, the controller of the parent directive is available for use in the child directive.

        /* Single Directive Inheritance*/
        /*link: function (scope, element, attrs, countryCtrl) {
            countryCtrl.makeAnnouncement("This city rocks");*/

        /* Multiple Directive Inheritance*/
        link: function(scope, element, attrs, ctrls){
            ctrls[0].makeAnnouncement("This city rocks");
            ctrls[1].makeLaw("Jump higher");
        }
    };
});