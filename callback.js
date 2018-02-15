function squar(n) {
    return n * n;
}

function arrSquare(arr, a) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = a(arr[i]);
    }
    return arr;
}

console.log(arrSquare([1, 2, 3], squar));

//---------------------------------------

function small() {
    return 8;
}

function large() {
    return 590;
}

function huge() {
    return 234567;
}

function generateNumber(f) {
    return f();
}

console.log(generateNumber(small));

//------------------zbir cifara u sifri 15+

function sumOfDigits(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;

}

function password(str, a) {
    var newArr = [];
    for (var i = 0; i < str.length; i++) {
        var car = parseInt(str[i]);
        if (!isNaN(car)) {
            newArr.push(car);
        }
    }
    //return newArr;
    return a(newArr);
}

console.log(password("abc123", sumOfDigits));

//--------zbir prvih, drugih... clanova dva niza iste duzine

function sumab(a, b) {
    return a + b;
}

function sumArrays(a, b, f) {
    var newAr = [];
    for (i = 0; i < a.length; i++) {
        newAr[i] = f(a[i], b[i]);
    }
    return newAr;
}

console.log(sumArrays([1, 2, 3], [4, 5, 6], sumab));

// functions that return functions

function f(name, surname) {
    return function () {
        console.log(name + "." + surname + "@gmail.com");
    }
}
f("dosta.je", "bilo")();


// IIFE -------------------------------------------------

(function (str) {
    var arr = [];
    for(var i = 0; i < str.length; i++){
        arr[i] = str[i];
    }
    var sum = 0;
    var newStr = "";
    for (var j = 0; j < arr.length; j++){
        if(arr[j] == "a"){
            arr[j] = "*";
            sum++;
        }
        newStr += arr[j];
    }
    console.log(newStr, sum);
    

})("javascript");

