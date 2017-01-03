/**
 * Lesson5-Services: Code Challenge
 *
 * Curly brace notation- An object is created by using curly brace notation.
 *Give a list of properties inside the curly braces, seperated by commas.
 *Each property is listed as a name followed by a colon, followed by a
 *value (or expression).
 *
 *Curly Braces, could mean:
 *1. The start of a function block
 *
 *2.The start of an object's properties description.  It is possible to
 *use (=) instead of (:) to assign a value to an object's property, or create one.
 *
 *Method -A property that contains a function.**/

//Step1: Register the app
angular.module('app',[]);

//Step2: Register the controller with the app
angular.module('app').controller('PostCtrl', function(messages){//start of function block
    //messageServiceObjRef variable is a reference to the services function.
    //In JS, variable references expand the scope of local variables.
    var messagesServiceObjRef = this;
    messagesServiceObjRef.newMessage = 'Hello World';
    messagesServiceObjRef.addMessage= function(message){//Declare a method.
        messages.add(message);
        messagesServiceObjRef.newMessage = '';
    };
});

//Step3: Register the Controller with the app
angular.module('app').controller('ListCtrl', function(messages){//start of function block
    //messageServiceObjRef variable is another reference to the services function.
    var messagesServiceObjRef = this;
    messagesServiceObjRef.messages = messages.list;
});

//Step4: Register the Service with the app
angular.module('app').factory('messages', function(){
    var messages = {};//Declare object description, with properties
    messages.list = [];//Declare an array object
    messages.add = function(message){//Declare a method.
        messages.list.push({id:messages.list.length, text:message});//Decalre Obj propertes
    };
    return messages;
});

