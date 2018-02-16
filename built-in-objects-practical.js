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

// Write a function to split a string and convert it into an array of words.

