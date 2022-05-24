/*
*******Named Function*******
*/

function message(){
    return `This is an named function`;
}
console.log(message());
/*



*******Anonymous Function*******
*/

var test = function (platform) {
    console.log("This is an anonymous ", platform);
 };

test("function!");

/*
******Difference between named funciton and anonymous function ?*****
* Named function have name for the function it is invoked by the name ---> But anonymous function did not have name for it,it is called the by the variable name which is assigned.

* We can reuse the named function in the code  ---> But anonymous function is reuse when it is assigned to the variable.

* A name function can be invoked before declaration.  ---> But When invoking an anonymous function, you can only call it after the declaration line.	

* In named function it is easier to debug because it display the function name in error log ---> But is difficult when using anonymous funciton to debug.

*/