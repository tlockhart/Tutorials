//Type 2, 3, and 4 sending arguments
var app = angular.module('app', []);
 //Type 2 and 3 sending arguments
 /*app.controller('PersonCtrl', function () {
    this.friends = [{
        name: 'Andrew'
    }, {
        name: 'Will'
    }, {
        name: 'Mark'
    }, {
        name: 'Alice'
    }, {
        name: 'Todd'
    }];
});*/

//Type 2 Iterate over data
/*app.filter('startsWithA', function () {
    // function to invoke by Angular each time
    // Angular passes in the `items` which is our Array
    return function (items) {
        // Create a new Array
        var filtered = [];
        // loop through existing Array
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            // check if the individual Array element begins with `a` or not
            if (/a/i.test(item.name.substring(0, 1))) {
                // push it into the Array if it does!
                filtered.push(item);
            }
        }
        // boom, return the Array after iteration's complete
        return filtered;
    };
});*/
//Type 3 sending arguments
/*app.filter('startsWithLetter', function () {
    return function (items, letter) {
        var filtered = [];
        var letterMatch = new RegExp(letter, 'i');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (letterMatch.test(item.name.substring(0, 1))) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});*/

//Type 4 Passing a Function
app.controller('PersonCtrl', function () {
    // here's our filter, just a simple function
    this.startsWithW = function (item) {
        // note, that inside a Controller, we don't return
        // a function as this acts as the returned function!
        return /w/i.test(item.name.substring(0, 1));
    };
    this.friends = [{
        name: 'Andrew'
    }, {
        name: 'Will'
    }, {
        name: 'Mark'
    }, {
        name: 'Alice'
    }, {
        name: 'Todd'
    }];
});