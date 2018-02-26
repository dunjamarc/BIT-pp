function Employee(name, surname, specialization, salary){
    this.name = name;
    this.surname = surname;
    this.specialization = specialization;
    this.salary = salary;
}

var e1 = new Employee("Pera", "Peric", "programmer", 500);
var e2 = new Employee("Zika", "Zikic", "programmer", 600);

Employee.prototype.getSpecialization = function(){
    console.log(this.specialization);
}

function Manager(name, surname, department, salary){
    this.name = name;
    this.surname = surname;
    this.department = department;
    this.salary = salary;
}

var m1 = new Manager("Laza", "Lazic", "sales", 700);

Manager.prototype.getDepartment = function(){
    console.log(this.department);
}

Manager.prototype.changeDepartment = function(department){
    this.department = department;
}

var sharedMethods = {     //second level of inheritance
    getData: function(){
        console.log(this.name, this.surmane);
    },
    getSalary: function(){
        console.log(this.salary);
    },
    increaseSalary: function(){
        this.salary = this.salary * 1.1;
    }
}

Employee.prototype.__proto__ = sharedMethods;
Manager.prototype.__proto__ = sharedMethods;

e1.getSalary();
m1.getSalary();

// -------------------------------------Applications

function WebApp(name, url, technologies, licence, stars){
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = stars;
}

function MobileApp(name, platforms, licence, stars){
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars;
}

WebApp.prototype.getData = function(){
    console.log(this.name, this.url, this.technologies, this.licence, this.stars);
}
WebApp.prototype.reactBased = function(){
    if(this.technologies.indexOf("react") == -1){
        return false;
    } else {
        return true;
    }
}

MobileApp.prototype.getData = function(){
    console.log(this.name, this.platforms, this.licence, this.stars);
}

MobileApp.prototype.forAndroid = function(){
    if(this.platforms.indexOf("android") == -1){
        return false;
    }
    else{
        return true;
    }
}

var sharedMethods = {
    isCCLicence: function(){
        if(this.licence == "CC"){
            return true;
        }
        else {
            return false;
        }
    },
    like: function(){
        return ++this.stars;
    },
    showStars: function(){
        return this.stars;
    }
};

MobileApp.prototype.__proto__ = sharedMethods;
WebApp.prototype.__proto__ = sharedMethods;


var webapp1 = new WebApp("instagram", "www.instagram.com", ["react", "angular"], "abc", 5);
var mobileapp1 = new MobileApp("messenger", ["facebook", "twitter"], "cc", 4);

console.log(webapp1.like());
console.log(mobileapp1.showStars());
