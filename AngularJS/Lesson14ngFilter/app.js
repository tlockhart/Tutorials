/**
 * Lesson 14 Lesson14ngFilter on 12/5/2016.
 */
function TestCtrl() {
    var self = this;
    self.people = [
        {
            name: "Eric Simons",
            born: "Chicago"
        },
        {
            name: "Albert Pai",
            born: "Taiwan"
        },
        {
            name: "Matthew Greenster",
            born: "Virginia"
        }
    ];
}

angular.module('app', [])
    .controller('TestCtrl', TestCtrl);
    //.filter('search', self.people);