function fun(func){
    if(typeof func === "function"){
        console.log(func());
    }
    else{
        return `The parameter passed is not a function it is an = "${typeof(func)}".`;
    }
}
 var arr = [];
 var obj = {};
 var num = 1;
 var str = "abc";
 function par_func(){
     return "The passed parameter is safeground successfully.";
 }

 console.log(fun(str));