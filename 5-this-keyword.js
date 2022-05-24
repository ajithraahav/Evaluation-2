function bio_data(name, age, company){
    this.name = name;
    this.age = age;
    this.work = company;
}

var bioClass = new bio_data("ajith",12,"company");
console.log(bioClass.age);

/*
this - keyword refers to the object , 
which object is refers is depends on how it is called. 
It is also refers to window object
when it is called alone
 */