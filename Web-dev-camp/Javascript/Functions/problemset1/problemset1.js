function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function factorial(num) {
    let fact = 0;
    while (num >= 0) {
       fact = num * (num - 1)
       num--
    }
    return fact;
}

function kebabToSnake(str) {
    return str.replace(/-/g, "_");
}

isEven(4);
factorial(4);
