/**
 * Created by tlockhart on 12/7/2016.
 */
/*Lesson19 Welcome Attribute*/
var app = angular.module('app', []);
app.directive("welcome", function() {
        return {
            /*restrict: "A",//Attribute*/
            /*restrict: "C",//Class*/
            link: function(){
                alert("Howdy!");
            }
        }
    });
app.directive("goodbye", function() {
    return {
        restrict: "A",
        link: function(){
            alert("See ya later!");
        }
    }
});
/*Lesson18: Greetings module with a welcome directive which is restricted to “E”, Element*/
/*angular.module('greetings', [])
    .directive("welcome", function() {
        return {
            restrict: "E",//Element
            template: "<div>Howdy there! You look splendid.</div>"
        }
    });*/