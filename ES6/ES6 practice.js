let capitalize = (...arg) => {
    let arr = [...arg];
    let newArr = [];
    arr.forEach((e) => {
        if (typeof e == 'string') {
            newArr.push(`${e[0].toUpperCase()}${e.substring(1)}`);
        }
    })
    return newArr;
}

console.log(capitalize('hello', 'there', 'ES', 6));

// ------------------------------------------------------------2

let tax = (price) => {
    const taxValue = 0.2;
    return price * taxValue;
}

console.log(tax(120));

// -----------------------------------------3

let increase = (arr, v = 1) => {

    let newArr = arr.map((e) => e + v);
    return newArr;
}

console.log(increase([4, 6, 11, -9, 2.1], 3));

// ------------------------------------------4

let filterEven = (arr) => {
    let even = arr.filter((e) => e % 2 == 0);
    return even;
}

console.log(filterEven([6, 11, 8, 9, 0, 3]));

// ------------------------------------------5

let filterString = (arr) => {
    let js = arr.filter((e) => e.includes('js') || e.includes('JS'));
    return js;
}

console.log(filterString(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));

// ---------------------------------------------------------6

let integers = (arr) => {
    let int = arr.filter((e) => Number.isInteger(e));
    return int;
}

console.log(integers([1.6, 11.34, 9.23, 7, 3.11, 8]));

// ---------------------------------------------------------7

let contain5 = (...arg) => {
    var arr = [...arg];
    let int = arr.filter((e) => Number.isInteger(e));
    let five = int.filter((e) => e.toString().includes('5'));
    return five;
}

console.log(contain5(23, 11.5, 9, 'abc', 45, 28, 553));

// ----------------------------------------------------------8

let returnIndex = (arr) => {
    let newArr = [];
    arr.forEach((e, i) => {
        if (e > 10) {
            newArr.push(i);
        }
    });
    return newArr;
}

console.log(returnIndex([1.6, 11.34, 29.23, 7, 3.11, 18]));

//------------------------------------------------------------9

const age = 30;

var arrOfPersons = [{
    name: 'Pera',
    age
}, {
    name: 'Zika',
    age
}, {
    name: 'Laza',
    age: 18
},]

let olderThan25 = (arr) => {
    let newArr = arr.filter((e) => e.age > 25);
    let names = newArr.map((e) => e.name);
    console.log(names);
}

let olderThan40 = (arr) => {
    return arr.some((e) => e.age > 40);
}

let olderThan20 = (arr) => {
    return arr.every((e) => e.age > 20);
}

console.log(olderThan20(arrOfPersons));

// -------------------------------------------10

let positiveInt = (arr) => {
    if (arr.every((e) => e > 0 && Number.isInteger(e))) {
        return 'yes';
    } else {
        return 'no';
    }
}

console.log(positiveInt([3, 11, 9.2, 5, 6]));

// ---------------------------------------------11

let product = (arr) => {
    return arr.reduce((total, e) => total * e);
}

console.log(product([2, 8, 3]));


// ---------------------------------------------12

let max1 = (arg) => Math.max(...arg);
console.log(max1([2, 7, 3, 8, 5.4]));


let max2 = (arr) => arr.reduce((a,b) => Math.max(a,b));
console.log(max2([2, 7, 3, 8, 5.4]));
