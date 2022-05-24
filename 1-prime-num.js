var numbers = [];
for(var j=0; j<=200; j++){
    numbers.push(j);
}
function prime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

var bum = numbers.filter(prime);
var x = bum.join(",");

console.log(x);