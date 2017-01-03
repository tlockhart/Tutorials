/**
 * Lesson 4: Angular Controllers, Created by tlockhart on 11/20/2016.
 */
angular.module('app', []);
//Example1: Register MainCtrl Constructor Function with our app module
//Second argument is the function that represents our controller
//inject the $scope object as an argument to the function
/*angular.module('app').controller('MainCtrl', function ($scope) {
    //set messege object;
    $scope.message = 'hello';
    $scope.updateMessage = function (message) {
        $scope.message = message;
    };
});*/

//Example2: Constructor As Syntax, Remove $scope argument, reference our
// controllers so that when we have nested or multiple nested
// controllers, we can access variables directly instead of
// using $parent
angular.module('app').controller('MainCtrl2', function () {
    var self = this;
    //Remove $scope from controller dependency and use self instead
    self.message = 'hello';
    self.changeMessage = function(message){
        self.message = message;
    };
});




