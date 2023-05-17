const removeFromArray = function(arr, ...args) {
    let result = [];
    
    for (const i in arr) {
        if (!args.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
