function Person(name, surname){
    this.name = name;
    this.surname = surname;
}

Person.prototype.fullname = function(){
    return this.name + " " + this.surname;
}

Person.prototype.printFullName = function(){
    console.log(this.fullname());
    
}

var pera = new Person("Pera", "Peric");


function Programmer(name, surname, language){
    Person.call(this, name, surname);   // !!!!!!!
    this.language = language;
}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = "Programmer";    // ?

Programmer.prototype.printInfo = function(){
    var fullNameString = Programmer.prototype.__proto__.fullname.call(this);   // ?????????????????????????
    return fullNameString + " " + this.language;
}

var zika = new Programmer("Zika", "Zikic", "JS");

console.log(Programmer.prototype);
console.log(zika.printInfo());




