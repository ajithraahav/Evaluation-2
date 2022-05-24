/*
 ******this - keyword used in class *******
 * Within a class constructor, this is a regular object. All non-static methods within the class are added to the prototype of this.
 */
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

var myCar = new Car("Ford", 2014);
var detail = myCar.name + " " + myCar.year;

console.log(detail);

/*******this - keyword used in function*****
 * Inside a function, the value of this depends on how the function is called.
 * In strict mode, however, if the value of this is not set when entering an execution context, it remains as undefined.
 */

function func(names) {
  return (this.names = names);
}

console.log(func("Ajith"));
