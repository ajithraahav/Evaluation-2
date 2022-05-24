var arr1 = [1,2,3,4,5];
var arr2 = [1,9,7,0,5];
var comm = [];
function common(){
    for(var i=0; i < arr1.length; i++){
        for(var j=0; j < arr2.length; j++){
            if(arr1[i]==arr2[j]){
                comm.push(arr1[i]);
            }
            else if(comm.length==0) {
                return "There is no common in the two sorted array !";
            }
        }
    }
    console.log(comm);
}
console.log(common());

