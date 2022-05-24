console.log("-----------Function Anatomy------------");
function name(parameter1, parameter2, parameter3) {  
    // code to be executed
}

/*

Function names can contain letters, digits, underscores, and dollar signs.

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

*/

console.log("--------------Anonymous Function----------------");

setTimeout(function () {  
    console.log('Execute later after 1 second')  
}, 1000);   

/*
Anonumous function does not have name to it. It can be assigned to a variable or  We can also use an anonymous function as an argument for another function. To understand better, let's implement a code under which we will pass the anonymous function as an argument value for another function.
*/

console.log("----------Assigning Function to variable------------");

const x = function (a, b) {return a * b};
console.log(x);

/*
In the above program the the anonymous function is assigned to the variable "x". The function is called using the variable name.
*/