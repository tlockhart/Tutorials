/**
 * Created by tlockhart on 11/30/2016.
 */
/*Lesson11Promises: CommonJS Promise ($q defer), and $q Contructor: Passing Data To
 * Created by tlockhart on 11/30/2016.*/

//$timeout, wrapper for setTimeout, return value of calling $timeout
// is a promise, which will be resolved when the delay has passed and
// the timeout function, if provided is executed.
//$q A service that helps you run functions asynchronously, and use
// their return values (or exceptions) when they are done processing.
function greeterSvcFactory($timeout, $q) {
        return function (name) {
            //Part1($qConstructor):return $q(function (resolve, reject) {
                var deferred = $q.defer()//Part2($qConstructor): comment the code, deferred object exposes promises

                // simulated async function
               // Part3($qConstructor):$timeout(function () {
                setTimeout(function () {
                    //Part4($qConstructor): comment below
                    //notify callback
                    deferred.notify('about to greet '+name);
                    if (Math.round(Math.random())) {
                        //Part5($qConstructor): "remove deferred." |resolves the derived promise to the given string value.
                        //success call back
                        deferred.resolve('Hello, '+name+ ' it is ok to proceed now.')
                    } else {
                        //Part6($qConstructor): remove "deferred." |rejection returns the given string value (rejection reason) to the promise.
                        //error call back
                        deferred.reject(name+ ' you can not enter now, try again later')
                    }
                }, 1000)
                //Part7($qConstructor): comment below:
                return deferred.promise;//return the associated vlue of the promise accessed with promise prop
                //then(successCallback, errorCallback, notifyCallback)
                // deferred.resolve calls the successCallback
                // deferred.reject calls the errorCallback
                // deferred.notify calls the notifyCallback
            //Part8($qConstructor):Uncomment})
        }
}
angular.module('app', [])
//Factory(FactoryName, Service)
    .factory('greeterSvcFactory', greeterSvcFactory)
    .run(function (greeterSvcFactory) {//run the function at runtime
        var promise =new greeterSvcFactory('Tony Lockhart')
            /*then calls one of the success or error callbacks asynchronously
            as soon as the result is available. The callbacks are called with
            a single argument: the result or rejection reason.  Then returns
            a new promise*/
            .then(function (string) {//print out the resolved promise value returned to $q
                console.log(string);
                alert('Success: '+string);
            }, function (error) {//Pass the rejection reason, returned to $q.
                console.log(error);
                alert('Failure: ' + error);
                /*notify is called before the promise is resolved*/
            }, function(update){//Part9: ($qConstructor) remove function
                alert('Got notification: '+update);
            })
    })
/*.finally(function() {
 console.log('Finished at:', new Date());
 alert('Finished at:', new Date());
 })*/
// }