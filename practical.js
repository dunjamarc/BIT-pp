function sumOfDigits(n) {
    //  var sum = 0;
    var lastDigit;
    var firstDigit;

    if (typeof n != "number") {
        return -1;
    }
    if (n < 0) {
        n = -n;
    }
    if (n < 10) {
        return n;
    }
    firstDigit = n % 10;

    while (n > 0) {
        lastDigit = n % 10;
        n = (n - lastDigit) / 10;
        //  sum += lastDigit;
    }
    return lastDigit + firstDigit;
}

console.log(sumOfDigits(789));

//-----------------------------------------4

/*function average (a, b, c, d){
var avg = (a + b + c + d ) /4

return avg
}

console.log(average (10, 20, 20, 10))*/

function average(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(average([10, 20, 30, 40, 50]));

//----------------------------------------6

// function stars(a, b, c) {
//     var sum = "";
//     var star = "*";

//     for (var i = 0; i < a; i++) {
//         sum += star;
//     }

//     sum += "\n";

//     for (var i = 0; i < b; i++) {
//         sum += star;
//     }

//     sum += "\n";

//     for (var i = 0; i < c; i++) {
//         sum += star;
//     }

//     return sum;
// }

function stars(arr) {
    var result = "";
    var sum = "";
    var star = "*";

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i]; j++) {
            sum += star;
        }
        sum += "\n";
    }
    return sum;
}

console.log(stars([5, 3, 27, 5, 9]));

//-----------------------------------9

function sumodd(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            sum += arr[i];
        }
    }

    return sum;
}

console.log(sumodd([2, 4, 6, 8, 10, 3, 5, 7]));

//-----------------------------------------10

function numOfLetter(str, a) {
    var sum = 0;
    str = str.toLowerCase();
    a = a.toLowerCase();
    for (i = 0; i < str.length; i++) {
        if (str[i] === a) {
            sum++;
        }
    }
    return sum;
}

console.log(numOfLetter("Azerbejdzanac", "A"));

//--------------------------------------------------2

function multiPositiv(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] *= 2;
        }
    }
    return arr
}
console.log(multiPositiv([-3, 11, 5, 3.4, -8]))

//------------------------------------------------4

function secondMin(arr) {
    var min = arr[0];
    var second = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    for (i = 0; i < arr.length; i++) {
        if (arr[i] < second && arr[i] > min) {
            second = arr[i];
        }
    }
    return second;
}

console.log(secondMin([4, 2, 2, -1, 6, 1, 5, 8]));

//-------------------------------------------------6

function symmetricArr(arr){
    var n = arr.length - 1;
    for(i=0; i<arr.length; i++){
        if(arr[0 + i] !== arr[n - i]){
            return "The array is NOT symmetric";
            break;
        }    
    }
    return "The array is symmetric";
}

console.log(symmetricArr([2,4,-2,7,7,-2,4,2]));

//-----------------------------------------------3

function minNum(arr){
    var min = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min + ", " + arr.indexOf(min);
}

console.log(minNum([-2, 4, 2, -32, 2, -1, 6, -11]));

//-----------------------------------------------5

function sumOfPos(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i];
        }
    }
    return sum;
}

console.log(sumOfPos([3, 11, -5, -3, 2]));

//----------------------------------------9

function delEl(arr, e){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] != e){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(delEl([4, 6, 2, 8, 2, 2], 2));

//--------------------------------------------10

function insertEl(arr, e, p){
    if(p > arr.length){
        return "Error";
    } else {
        for(var i = arr.length; i > p; i--){
            arr[i] = arr[i-1];
        }
        arr[p] = e;
        return arr;
    }
}

console.log(insertEl([2, -2, 33, 12, 5, 8], 78, 6));