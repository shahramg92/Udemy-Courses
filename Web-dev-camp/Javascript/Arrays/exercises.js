console.log("CONNECTED");

function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

printReverse([3,6,2,5]);

function isUniform(arr) {
    let first = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}

function sumArray(arr) {
    var arr = [1, 2, 3, 4, 5]
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

function sumArray(arr) {
    let sum = 0;
    arr.forEach(function(el) {
        sum += el
    })  
    return sum;
}


function max() {
    var arr = [1, 2, 3, 4, 5]
    var max = 0;

    arr.forEach(function(el) {
        if (el >= max) {
            max = el;
        }
    }) 
    return max;
}
