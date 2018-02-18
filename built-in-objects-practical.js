/*Write a function to convert a number from one base (radix) to another. 
Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;*/

//-----------------------------Write a JavaScript function that reverses a number. 2
function reverse(n){
    var str = n.toString();  
    var arr = str.split("");
    arr.reverse();
    var newStr = arr.join("");
    return parseInt(newStr);
}

console.log(reverse(235));

// Write a JavaScript function that returns a passed string with letters in alphabetical order.  3
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

function alphaString(str){
    var arr = str.split("");
    arr.sort();
    var newStr = arr.join("");
    return newStr;
}

console.log(alphaString("hello world"));

// Write a function to alphabetize words of a given string. 
// Alphabetizing a string means rearranging the letters so they are sorted from A to Z.   4

function alphabetize(str){
    var arr = str.toLowerCase().split(" ");
    var sorted = arr.sort();
    return sorted.join(" ");
}

console.log(alphabetize("Anja and Dunja are the best students"));

// Write a function to split a string and convert it into an array of words.   5

function arrOfWords(str){
    var arr = str.split(" ");
    return arr;
}

console.log(arrOfWords("We love learning JS"));

//--------------------- Write a function to convert a string to its abbreviated form.   6 ???

function abbreviated(str){
    var arr = str.split(" ");
    for(var i = 0; i < arr.length; i++){
        if(arr[i].length > 4){
            arr[i] = arr[i].slice(0, 3) + ".";
        }
    }
    return arr;
} 

console.log(abbreviated("This string is abbreviated"));

// Write a function that can pad (left, right) a string to get to a determined length.   7  ???

// Write a function to capitalize the first letter of a string.   8

function capitalize(str){
    var newStr = str[0].toUpperCase() + str.substring(1, str.length);
    return newStr;
}

console.log(capitalize("hello World"));

// Write a function to hide email addresses to protect them from unauthorized users.   9   ???

/* Write a program that accepts a string as input and swaps the case of each character. For 10   example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
       var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       var LOWER = 'abcdefghijklmnopqrstuvwxyz';  */

function swapCase(str){
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var newStr = "";

    for(var i = 0; i < str.length; i++){
        if(UPPER.search(str[i]) !== -1){
            newStr += str[i].toLowerCase();
        } else if(LOWER.search(str[i]) !== -1){
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(swapCase('The Quick Brown Fox'));
