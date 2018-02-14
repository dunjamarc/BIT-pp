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


// IIFE

(function (counta) {
    var sum = 0;
    for (var i = 0; i < counta.length; i++) {
        var newstr
        if (counta[i] == "a") {
            sum++;
        }
        if (counta[i] == "a") {
            newstr[i] = "*";
        } else {
            newstr[i] = counta[i];
        }

    } console.log(sum);
    console.log(newstr);


}

)("javascript");
