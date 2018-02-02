/*var num = 31;

if (num > 9 && num < 100) {
    secondDig = num % 10;
    firstDig = (num - secondDig) / 10;
    nestoDig= secondDig * 10 + firstDig;
    console.log(nestoDig);
} else {
    console.log("greska");
}*/
var num = 56;

if(num > 9 && num < 100){

    var secondDig = num % 10;
    var firstDig = (num - secondDig) / 10;

    console.log(secondDig + "" + firstDig);
} else {
    console.log("Greska!");
}