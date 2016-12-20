/**
 * Created by tlockhart on 12/19/2016.
 */
var app =angular.module('app', []);
    app.controller('AppCtrl', function($scope){
    $scope.leaveVoicemail = function(number, message){
        alert('Number: ' + number + ' said: ' + message)
    }
})

app.directive('phone', function(){
    return {
        restrict: 'E',
        scope: {
            //"@", which is basically shorthand for reading in an attribute.
            number: "@",
            // "=", which is going to set up a bidirectional two-way binding
            // so that anything we update on the directive will be updated in
            // the controller as well.
            network: "=",
            // "&" which is for calling something within the scope of that controller.
            makeCall: "&"
        },
        /*Part2: Using a templateUrl*/
        templateUrl: 'phone.html',
        /*Part1: Using a Template
        template:
        "<div class='panel'>Number: {{number}} Network:<select ng-model='network' ng-options='net for net in networks'></select>" +
        "<input type='text' ng-model='value'>"+
            "<div class='button' ng-click='makeCall({number: number, message: value})'>"+"Call Home!</div></div>",*/

        link: function(scope){
            scope.networks = ["Verizon", "AT&T", "Sprint"];
            //link Network Element to Verizon
            scope.network = scope.networks[0];
        }
    }
})