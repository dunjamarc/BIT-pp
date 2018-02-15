// 8
function maxAndMin(arr){
    var newArr = [];
    var max = arr[0];
    var min = arr[0];

    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }

    newArr[0] = min;
    newArr[1] = max;
    return newArr;
}

console.log(maxAndMin([2, 5, 1, 5, 6]));

//-------------------------------------9 unfinished

function maxAndMin(arr){
    var median;
    var newArr = [];
    var max = arr[0];
    var min = arr[0];
    var indexMax = 0;
    var indexMin = 0;
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            indexMax = i;
        }
        if(arr[i] < min){
            min = arr[i];
            indexMin = i;
        }
    }
    for(var j = 0; j < arr.length; j++){
        if(j != indexMax || j != indexMin){
            newArr.push(arr[j]);
        }
    }
    return newArr;
}

console.log(maxAndMin([2, 5, 1, 5, 6]));

//-------------------------------------10

function frequentEl(arr){
    var counter = 0;

    for(var i = 0; i < arr.length; i++){
        var count = 0;
        for(var j = 0; j < arr.length; j++){

            if(arr[i] == arr[j]){
                count++;
            }
        }
        if(count > counter){
            counter = count;
        }
    }
    return counter;
}

console.log(frequentEl([1, 3, 2, 2, 4, 3, 3, 3, 2, 3]));

//------------------------------------------------------11

function elements(arr){
    var newArr = [];
    var len = arr.length;
    if(len % 2 == 1){
        newArr[0] = arr[0];
        newArr[1] = arr[(len - 1) / 2];
        newArr[2] = arr[len - 1];
        return newArr;
    } else if (len % 2 == 0){
        newArr[0] = arr[0];
        newArr[1] = arr[len - 1];
        return newArr;
    } else {
        return arr;
    }
}

console.log(elements([]));

//------------------------------------------------12

function average(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(average([1,3,5,7]));

//----------------------------------------------13

function greaterThanAv(arr){
    var newArr = [];
    var sum = 0;

    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    var average = sum / arr.length;

    for(var j = 0; j < arr.length; j++){
        if(arr[j] > average){
            newArr.push(arr[j]);
        }
    }
    return newArr;
}

console.log(greaterThanAv([1,3,5,7]));

//-------------------------------------14

function bodyMass(weight, height){
    var ibm = weight / (height * height);
    if (ibm < 15){
        return "Starvation";
    } else if (ibm < 17.5){
        return "Anorexic";
    } else if (ibm < 18.5){
        return "Underweight";
    } else if (18.5 <= ibm < 25){
        return "Ideal";
    } else if (25 <= ibm < 30){
        return "Overweight";
    } else if(30 <= ibm < 40){
        return "Obese";
    } else if (ibm >= 40){
        return "Morbidly obese";
    }
}

console.log(bodyMass(63, 1.78));
