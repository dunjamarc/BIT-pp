var a = -3;
var b = 7;
var c = 10;

var min;
var mid;
var max;

if(a > b && a > c){
    max = a;
} else if (b > a && b > c){
    max = b;
} else {
    max = c;
}

if(a < b && a < c){
    min = a;
} else if (b < a && b < c){
    min = b;
} else {
    min = c;
}

if(a < b && a > c || a > b && a < c){
    mid = a;
} else if (b > a && b < c || b < a && b > c){
    mid = b;
} else {
    mid = c;
}

console.log(min + " " + mid + " " + max);


