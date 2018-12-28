function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function factorial(num) {
    let result = 1;

    for (var i = 2; i <= num; i++) {
        result = result * i;
    }
    return result;
}

function kebabToSnake(str) {
    return str.replace(/-/g, "_");
}
