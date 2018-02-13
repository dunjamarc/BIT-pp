function print(message){
    console.log(message);
}

var write;
write = print;

console.log(typeof print);
console.log(typeof write);

print("Hello world");
write("Hello");
write = print("abc");

// function literal notation ------
var printMessage = function(message){
    console.log(message);
}

//------------------------------1

function vowelCount(inputString) {
    var vowelList = 'aeiouAEIOU';
    var vowelCount = 0;

    for (var x = 0; x < inputString.length; x++) {
        if (vowelList.indexOf(inputString[x]) !== -1) {  // indexOf nepostojeceg elementa je -1
            vowelCount += 1;
        }

    }
    return vowelCount;
}

console.log(vowelCount("The quick brown fox"));

//----------------------------------------------2

var combine = function(arr1, arr2){
    var newArr = [];
    var j = 0;
    for(var i = 0; i < arr1.length; i++){
        newArr[j] = arr1[i];
        j++;
        newArr[j] = arr2[i];
        j++;
    }
    return newArr;
}

console.log(combine(["a", "b", "c"], [1, 2, 3]));

//----------------------------------------------3

var rotate = function(list, k){
    var newList = [];
    for(var i = 0; i < list.length - k; i++){
        newList[i] = list[k+i];
    }
    var n = 0;
    
    for(var j = i; j < list.length; j++){
        newList[j] = list[n];
        n++;
    }
    return newList;
}

console.log(rotate([1, 2, 3, 4, 5, 6], 2));

//--------------------------------------------4

var numToArr = function(num){
    var newArr = [];
    var i = 0;
    while(num > 0){
        var a = num % 10;
        newArr[i] = a;
        num = (num - a) / 10; 
        i++;
    }

    var myArr = [];
    for(var j = 0; j < newArr.length; j++){
        myArr[j] = newArr[newArr.length - j - 1];
    }
    return myArr;
}

console.log(numToArr(123454));

//--------------------------------------------5

var table = function(){
    var row = "";
    for(var i = 1; i < 13; i++){
        for(var j = 1; j < 13; j++){
            row += (i * j + " ");
        }
        row += "\n";
    }
    return row;
}

console.log(table());

//--------------------------------------------6

var tempConvertor = function(c){
    return c * 9/5 + 32;
}

console.log(tempConvertor(20));

//-----------------------------------------------7 

var maxEl = function(arr){
    var newArr = [];
    var k = 0;
    for(var i = 0; i < arr.length; i++){
        if(!isNaN(arr[i])){     // loop array and filter non numbers
            newArr[k] = arr[i];
            k++;
        }
    }

    var max = newArr[0];
    for(var j = 1; j < newArr.length; j++){
        if(newArr[j] > max){     // find max number of new array
            max = newArr[j];
        }
    }
    return max;
}

console.log(maxEl([2, undefined, 100, 5, "a", 45, 3, 7, 9, 1, 88]));

//------------------------------------15 printing words in rectangular

var printRect = function(a) {
    
    var longestElem = a[0].length;
    //find longest element in array
    for (var i = 1; i < a.length; i++) {
        if(a[i].length > longestElem) {
            longestElem = a[i].length;
        }
    }
    //number of columns and rows
    var numOfCols = longestElem + 4;
    var numOfRows = a.length + 2;

    //first and last line
    var firstLine = '';
    for(i = 0; i < numOfCols; i++ ) {
        firstLine += '*';
    }

    var line = '';
 /*   for(var j = 0; j < numOfCols; j++) {
        if(j == 0 || j == numOfCols - 1) {
            line += '*';
        } else if (j == 1 || j == numOfCols - 2) {
            line += ' ';
        } else {

            for(var k = 0, m = 0; m < numOfCols - 4; k++, m++) {
                
                if (k < a[0].length ) {
                    line += a[0][k];
                } else {
                    line += ' ';
                }
            }
        }
        console.log(line);
    } */

    for(var j = 0; j < a.length; j++){    //adding spaces to shorter words
        if(a[j].length < longestElem){
            var space = longestElem - a[j].length;
            for(var k = 0; k < space; k++){
                a[j] += " ";
            }
        }
    }

    for(var m = 0; m < a.length; m++){       // defining lines (with words)
        line += "* " + a[m] + " *" + "\n";
    }

    var result = firstLine + "\n" + line + firstLine;
    console.log(result);
}
printRect(["Hello", "World", "in", "a", "frame"]);