const reverseString = function(text) {
    let resultArray = [];
    text.split('').forEach(c => {
        resultArray.unshift(c);
    });
    return resultArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
