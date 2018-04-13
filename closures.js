function add(a){
    return function(b){
        return a + b;
    }
}

var f = add(5);
var res = f(8);
console.log(res);


function selection(a, f){
    var newArray = [];
    for(var i = 0; i < a.length; i++){
        if(f(a[i])){
            newArray.push(a[i]);
        }
    }
    return newArray;
}

function lessThan(n){
    return function(x){
        return x < n;  // true || false
    }
}

function startsWithPro(s){
    if(s.toLowerCase().indexOf("pro") == 0){
        return true;
    }
    return false;
}

var numbers = [2,3,4,5,6]
var strings = ["programming", "Product", "Proto", "abc"];
var filteredStrings = selection(numbers, lessThan(5));
console.log(filteredStrings);