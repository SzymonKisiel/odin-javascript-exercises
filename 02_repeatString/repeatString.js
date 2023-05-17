const repeatString = function(str, n) {
    if (n < 0) {
        return 'ERROR'; 
    }

    if (n == 0) {
        return "";
    }

    let result = str;
    for (let i = 1; i < n; ++i) {
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
