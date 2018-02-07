function addition(a, b) {  //declaration with parameters
    var sum;
    sum = a + b;
    return sum;
}
var s = addition(3, 4); //calling function with arguments

console.log(s);

//---------------------------------1

function checkString(input) {
    if (typeof input === 'string') {
        return true;
    } else {
        return false;
    }
}

var s = checkString("My random string");
console.log(s);

function checkString(input) {
    if (typeof input === 'string') {
        input = true;
    } else {
        input = false;
    }
    return input;
}

var s = checkString("My random string");
console.log(s);

//---------------------------------------------2

function blankString(string) {
    if (string === " ") {
        return true;
    } else {
        return false;
    }

}
console.log(blankString(false))

//---------------------------------------------3

function concate(string, n) {
    var newString = "";
    for (i = 0; i < n; i++) {
        newString += string;
    }
    return newString;
}
console.log(concate("Ha", 5));

//---------------------------------------------4

function countLetter(string, letter) {
    var count = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] == letter) {
            count++;
        }
    }
    return count;
}
console.log(countLetter("My random string", "g"));

//---------------------------------------------5

function posChar(string, n) {
    var result;
    for (i = 0; i < string.length; i++) {

        if (string[i] == n) {
            result = i + 1;
            break;
        }
    }
    if (result == undefined) {
        result = -1;
    }
    return result;
}
console.log(posChar("tra hja df", "h"));

//---------------------------------------------6

function posChar(string, n) {
    var result;
    for (i = string.length - 1; i >= 0; i--) {

        if (string[i] == n) {
            result = i + 1;
            return result;
        }
    }
    return -2;
}
console.log(posChar("tra hja df", "h"));

//---------------------------------------------7

function strToArray(string){
    var arr = [];
    for(i=0;i<string.length;i++){
        if(string[i] === " "){
            arr[i] = null;
        }else{
            arr[i]=string[i];
        }
    }
return arr;
}

console.log(strToArray("tihom ir"));

//---------------------------------------------8

function prime(n){
    if(n % 2 !== 0 && n % 3 !==0){
        return true;
    }else {
        return false;
    }
}

console.log(prime(12));

//---------------------------------------------9