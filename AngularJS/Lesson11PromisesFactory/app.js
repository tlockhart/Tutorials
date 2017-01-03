/*Lesson11Promises $q Contructor
 * Created by tlockhart on 11/30/2016.*/

//$timeout, wrapper for setTimeout, return value of calling $timeout
// is a promise, which will be resolved when the del
//$q A service that helps you run functions asynchronously, and use
// their return values (or exceptions) when they are done processing.
function getData($timeout, $q) {
    return function () {
        return $q(function (resolve, reject) {
            //var defer = $q.defer()//deferred object exposes promises

            // simulated async function
            $timeout(function () {
                if (Math.round(Math.random())) {
                    resolve('data received!')//resolves the derived promise with the value data received.
                } else {
                    reject('oh no an error! try again')//rejects the derived promise with the value reason
                }
            }, 2000)
            //return defer.promise//return the associated vlue of the promise accessed with promise prop
        })
    }
}
angular.module('app', [])
    .factory('getData', getData)
    .run(function(getData) {
        var promise = getData()
            .then(function (string) {//print out the resolved promise value
                //console.log(string);
                alert(string);
            }, function (error) {//Pass an error handling function if the promise is rejected.
                //console.error(error)
                alert(error);
            })
            .finally(function() {
                //console.log('Finished at:', new Date());
                alert('Finished at:', new Date());
            })
    })
