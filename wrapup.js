// spajanje sortiranih nizova
function merge(a, b) {
    var i;
    var j;
    var k;
    var c = [];

    for (i = 0, j = 0, k = 0; i < a.length && j < b.length; k++) {
        if (a[i] < b[j]) {
            c[k] = a[i];
            i++;
        } else {
            c[k] = b[j];
            j++;
        }
    }

    if (i == a.length) {     // ako smo na kraju a
        for ( /*j=j*/; j < b.length; j++) {
            c[k] = b[j];
            k++;
        }
    } else {               // ako smo na kraju b
        for ( /*i=i*/; i < a.length; i++) {
            c[k] = a[i];
            k++;
        }
    }
    return c;
}

console.log(merge([1, 3, 5], [1, 2, 4, 6]));

//-------------------nadovezati dva niza nesortirana

function merge1(a, b) {
    for (var i = 0; i < b.length; i++) {
        a[a.length] = b[i];
    }
    return a;
}

console.log(merge1([1, 3, 5], [7, 2, 4, 6]));

//------------------------------------------

function merging(a, b) {
    var c = [];
    var j = 0;
    for (i = 0; i < a.length; i++) {
        c[j] = a[i];
        j++;
        c[j] = b[i];
        j++;
    }
    return c;
}
console.log(merging([1, 3, 5], [7, 2, 4]));

//-----------------------------------------9

function separator(str, a) {
    var newStr = "";
    if (a === undefined) {
        a = "-";
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            newStr = newStr + a;
        } else {
            newStr = newStr + str[i];
        }
    }
    return newStr;
}

console.log(separator("My random string"));

//-------------------------------------------10

function partOfString(str, n) {
    var newStr = "";
    for (var i = 0; i < n; i++) {
        newStr = newStr + str[i];
    }
    return newStr + "...";
}

console.log(partOfString("tralala", 5));

//--------------------------------------------11

function arrOfNum(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(isNaN(arr[i]) === false && arr[i] !== Infinity){
            newArr.push(Number(arr[i]));
        }
    }
    return newArr;
}
console.log(arrOfNum(["1", "21", undefined, "42", "1e+3", Infinity]));

//---------------------------------------------12

function retire(n, sex){
    var age = 2018 - n;
    if(sex == "m"){
        if(age < 65){
            return (65 - age);
        } else {
            return "You are already retired."
        }
    } else if(sex == "f") {
        if(age < 60){
            return (60 - age);
        } else {
            return "You are already retired."
        }
    }
}

console.log(retire(1961, "f"));

//--------------------------------------------13

function first(num){
    if(num == 1 || num % 10 == 1 && num !== 11){
        return (num + "st");
    } else if(num == 2 || num % 10 == 2 && num !== 12){
        return (num + "nd");
    } else if(num == 3 || num % 10 == 3 && num !== 13){
        return (num + "rd");
    } else {
        return (num + "th");
    }
}

console.log(first(34456));