var arr =[];

for(var i=1; i <= 50; i++){
    arr.push(i);                       //push 1 to 50 numbers in arr empty array
    var str_arr = arr.toString();      //arr-array converted into string array
    var splited = str_arr.split("");   //using split two digit numbers are splited into single digit value
    var zeros = splited.filter(Zeros); //Zeros function filter the zeros using array.filter method 
    function Zeros(zero){
        return zero==0;
    }
    var count = zeros.length;         //counbt the filtered zero using arr.length
}
console.log(count);
