var message = " Good morning!";

var i;

for (i = 1; i < 4; i = i + 1) {

    console.log(message);
}

console.log("Done.");

//-------------------------------------

for(i = 0; i < 16; i++){
    if(i % 2 === 0){
        console.log(i+" is even number");
    } else {
        console.log(i+" is odd number");
    }
}

//---------------------------------------

var myArray = [3, 5, 7];
var sum = 0;
var product = 1;
/*
for(i=0; i < myArray.length; i++){
    sum += myArray[i];
    product *= myArray[i];
}
console.log(sum);
console.log(product);
*/
for(i in myArray){
    sum += myArray[i];
    product *= myArray[i];
}
console.log(sum);
console.log(product);
//---------------------------------------------------

var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
for(i in a){
    for(j in a[i]){
        console.log(a[i][j]);
    }
}

//---------------------------------------

var David = [80, 60, 100];
var sum= 0;

for (i in David){
    sum = sum + David[i];
}
var average = sum / David.length;
console.log(average);

if (average < 60){
    console.log("F");
} else if (average < 70){
    console.log("D");
} else if (average < 80){
    console.log("C");
} else if (average < 90){
    console.log("B");
} else if (average < 100){
    console.log("A");
}