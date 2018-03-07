function capitalize(...arg){
    let arr = [...arg];
    let newArr = [];
    arr.forEach(function(e){
        if(typeof e == 'string'){
            newArr.push(`${e[0].toUpperCase()}${e.substring(1)}`);
        }
    })
    return newArr;
}

console.log(capitalize('hello', 'there', 'ES', 6));

// ------------------------------------------------------------2

function tax(price){
    const taxValue = 0.2;
    return price * taxValue;
}

console.log(tax(120));

// -----------------------------------------3

function increase(arr, v = 1){

    let newArr = arr.map(function(e){
        return e + v;
    })
    return newArr;
}

console.log(increase([4, 6, 11, -9, 2.1], 3));

// ------------------------------------------4

function filterEven(arr){
    let even = arr.filter(function(e) {
        return e % 2 == 0 ;
    });
    return even;
}

console.log(filterEven([6, 11, 8, 9, 0, 3]));

// ------------------------------------------5

function filterString(arr){
    let js = arr.filter(function(e) {
        return e.includes('js') || e.includes('JS');
    });
    return js;
}

console.log(filterString(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));

// ---------------------------------------------------------6

function integers(arr){
    let int = arr.filter(function(e){
        return Number.isInteger(e);
    });
    return int;
}

console.log(integers([1.6, 11.34, 9.23, 7, 3.11, 8]));

// ---------------------------------------------------------7

function contain5(...arg){
    var arr = [...arg];
    let int = arr.filter(function(e){
        return Number.isInteger(e);
    });
    let five = int.filter(function(e) {
        return e.toString().includes('5');
    });
    return five;
}

console.log(contain5(23, 11.5, 9, 'abc', 45, 28, 553));

// ----------------------------------------------------------8

function returnIndex(arr){
    let newArr=[];
    arr.forEach(function(e, i){
        if(e > 10){
            newArr.push(i);
        }    
    });
    return newArr;
}

console.log(returnIndex([1.6, 11.34, 29.23, 7, 3.11, 18]));

//------------------------------------------------------------9

const age = 30;

var arrOfPersons = [ {
    name: 'Pera',
    age
},  {
    name: 'Zika',
    age
}, {
    name: 'Laza',
    age: 23
},]

function olderThan25(arr){
    var newArr = arr.filter(function(e){
        return e.age > 25;
    });
    let names = newArr.map(function(e){
        return e.name;
    })
    console.log(names);
}

olderThan25(arrOfPersons);

