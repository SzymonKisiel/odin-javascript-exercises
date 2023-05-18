let fibonacciNums = {
    0: 0,
    1: 1,
    2: 1
};

const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }

    let y = fibonacciNums[n];
    if (y != undefined) {
        return y;
    }

    let oneBefore = fibonacci(n-1);
    let twoBefore = fibonacci(n-2);
    let result = oneBefore + twoBefore;
    fibonacci[n] = result;
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
