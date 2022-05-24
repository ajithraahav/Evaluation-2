var arr =[1,3,5,6,7,9,10];
var last_value = arr[arr.length-1];
var missing_num = [];

for(var i=arr[0]; i <= last_value; i++){
    if(arr.indexOf(i)== -1){
        missing_num.push(i);
    }
}
console.log(missing_num);