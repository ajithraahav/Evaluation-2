/*
********CAll by Value****** 
The original variable did not change modified in other variables.
The copied variable is created in different memory locations.
*/

var a = 5; 
var b;
b = a;
a = 3;
console.log("A=",a);
console.log("B=",b);

/*
********CAll by Reference******
The original variable gets modified on changes in other variables.
The copied variable is created in same memory locations.
On passing variables in a function, any changes made in the passed parameter will update the original variable’s reference too.
*/
var detail = {name:"ajith", age: 21};
var new_detail;
new_detail = detail;

detail.name = "Kishore";

console.log(detail);
console.log(new_detail);
