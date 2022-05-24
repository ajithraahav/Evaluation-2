/*
***What is anonymous function ? ******

Anonumous function does not have name to it. It can be assigned to a variable or  We can also use an anonymous function as an argument for another function.

***Where do we use it ? ******

Anonymous function are used in event call backs. There we don't want the function name , we exceute the function after event finished the execution it is called using the variable assigned to the anonymous function.

***Why do we need it ? *******

We need anonymous function to pass an it to other function as its argument.
In order to call and execute a function immediately after its declaration, creating an anonymous function is the best way

The example given below for the Anonymous function.
*/
setTimeout(function () {  
    console.log('Execute later after 1 second')  
}, 1000);  