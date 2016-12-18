/**
 * Created by tlockhart on 12/17/2016.
 */
var app = angular.module('choreApp', []);

app.controller("ChoreCtrl", function($scope){
    $scope.logChore = function(chore){
        alert(chore + " is done!");
    };
});
app.directive("kid", function() {
    return {
        restrict: "E",
        scope: {
            //set the done property to recieve an expression.
            done: "&"
        },
        //Accept the chore object and output the chore object.
        template: '<input type="text" ng-model="chore">'+'{{chore}}<br>'+
        //Include a div with a class of "button" and an ng-click attribute
        // set to "done({chore: chore})"

        //  {chore: chore} maps the chore from the model we made in the <input> to be passed
        // to the logChore function when we said 'done="logChore(chore)"'
        // (in the kid directive)

        // Make the text clickable
        //'<div class="button" ng-click="done({chore: chore})">I\'m done</div>'

        //Create an actual clickable button
        '<button ng-click="done({chore: chore})">Click when done!</button>'
    };
});