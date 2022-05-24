/*
******Currying in Javascript*******
Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.
*/

let planets = function(a){
    return function(b){
        return "Favorite planets:" + a +" and " + b; 
    };
};

let favoritePlanets = planets("Jupiter"); 

console.log(favoritePlanets("Earth"));
console.log(favoritePlanets("Mars"));
console.log(favoritePlanets("Saturn"));

