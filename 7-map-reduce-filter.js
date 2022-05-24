/*
********FILTER********
Filter creates a new array by removing elements if the condition we give becomes false. 
*/
var arr = [1,2,3,4,5];
var doubled_arr = arr.filter(num => num %2==0);
console.log(doubled_arr);

/*
********MAP**********
The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
*/
var new_arr = arr.map(num => num * 2 );
console.log(new_arr);

/*
********REDUCE*******
Reduce, takes all of the elements in an array and reduces them into a single value,it runs a reducer function on each element of the array.
*/
var sum = arr.reduce((num1,num2) => {
    return num1 + num2 ;
});
console.log(sum);