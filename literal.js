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