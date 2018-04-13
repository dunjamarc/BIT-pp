// 1

var duplicate = function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(duplicate([2, 4, 7, 11, -2, 1]));

// ------------------------------------------2

var removeDupl = function (arr) {
    var newArr = [];
    arr.sort(function (a, b) { return a - b });

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeDupl([8, 8, 8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

//-------------------------------------------------------------3

var checkIfOdd = function (arr) {
    if (arr.length % 2 == 1) {
        return true;
    } else {
        return false;
    }
}

// console.log(checkIfOdd([1, 2, 9, 2, 1]));

var lessThan = function(arr, func) {

    var check = func(arr);
    if(check) {
        var midIndex = arr[(arr.length - 1) / 2];
        var newArr = arr.sort(function (a, b) { return a - b });
        var result = newArr.indexOf(midIndex);
        return result;
    } else {
        return "Error!";
    }
}

console.log(lessThan([-1, 8.1, 3, 6, 2.3, 44, 2.11], checkIfOdd));


//--------------------------------------------------------- 4


var smallestEl = function(arr) {
    var min = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    var position = arr.lastIndexOf(min);
    return {
        value: min,
        index: position
    }
}

var obj = smallestEl([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]);
console.log(obj);


// -----------------------------------------------------------5a

var lessElements = function(arr, el){
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < el) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

/*console.log(lessElements([1, 2, 3, 5, 1], 3));

// 5b

var subArr = function(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i].substr(0, 3) === "pro"){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(subArr(["proactive", "hello", "productive", "world"]));

5c
*/

var filter = function(arr, func, el) {
    return func(arr, el);
}
 console.log(filter([1, 2, 3, 5, 1], lessElements, 2));

//---------------------------------------------------------6


function Product(name, price) {
    this.name = name;
    this.price = price;
}

var product1 = new Product('milk', 101 );
var product2 = new Product('sugar', 150);
var product3 = new Product('apples', 50);

var products = [product1, product2, product3];

// b
var totalPrice = function(arr) {
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
        total += arr[i].price;
    }
    return total;
}
console.log(totalPrice(products));

// c
var averagePrice = function(arr, func) {
    var result = func(arr) / arr.length;
    return result.toPrecision(6);
}
console.log(averagePrice(products, totalPrice));

// d
var mostExpensive = function(arr) {
    var max = arr[0].price;
    var product = '';
    for(var i = 1; i < arr.length; i++) {
        if(arr[i].price > max) {
            max = arr[i].price;
            product = arr[i].name;
        }
    }
    return product.toUpperCase();
}

console.log(mostExpensive(products));

// -------------------------------------7

var capString = function(str){
    if(str === str.toUpperCase()){
        return true;
    } else {
        return false;
    }
}

//console.log(capString("HELLO WORLD"));

// b
var digits = function(str){
   if(str.search(/[0-9]/) === -1){
       return false;
   } else {
       return true;
   }
}

//console.log(digits("HelloWorld12"));

// c
var hexColor = function(str){
    if(str.length !== 6 || str.search(/[G-Z]/i) !== -1){
        return false;
    } else {
        return true;
    }
}
 
//console.log(hexColor("ffaa12"));

// d
var year = function(num){
    if(1900 < num < 2018){
        return true;
    } else {
        return false;
    }
}

//console.log(year(1986));

// e

function validator(a, b, c, d){
    return {
        stringValidator: a,
        passwordValidator: b,
        colorValidator: c,
        yearValidator: d
    }
}

var obj = validator(capString, digits, hexColor, year);
console.log(obj.stringValidator('HDEUU')); 

// ----------------------------------------------------8 

var numOfDaysToBd = function(day) {
    var birthday = new Date(day);
    var presentDay = new Date();
    var untill = Math.ceil((birthday - presentDay) / 86400000);
    return untill + ' days';
}

console.log(numOfDaysToBd('2 25 2018'));

//-----------------------------------------------9 

var travelTime = function(dep, arr) {
    var departure = new Date('1 1 2018 ' + dep);
    var arrival = new Date('1 1 2018 ' + arr);
    
    var difference = new Date(arrival - departure);
    console.log(difference);
    var diff = difference.getUTCHours() + ':' + difference.getMinutes() + ':' + difference.getSeconds();
    return diff;
}

console.log(travelTime('8:22:13', '11:43:22'));

//---------------------------------------------10
/*function factory(x, y, z){    FACTORY
    return {
        x: x,
        y: y,
        z: z 
    }
}

console.log(factory(3, 5, 1)); */

function Points(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

var point1 = new Points(5, 5, 5);
var point2 = new Points(0, 0, 0);

console.log(point1);

var distance = function(p1, p2) {
   return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2) + Math.pow(p1.z - p2.z, 2));
}

console.log(distance(point1, point2));

//---------------------------------------------11
// a, b
var randomInteger = function(max, min){
    return Math.round(((max - min) * Math.random()) + min);
}

console.log(randomInteger(100, 50));

// c
var arrOfRandom = function(n, randFunc, min, max) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = randFunc(min, max);
    }
    return arr;
}

console.log(arrOfRandom(5, randomInteger, 50, 100));