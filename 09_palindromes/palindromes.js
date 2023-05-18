const palindromes = function (str) {
    const filtered = str
        .toLowerCase()
        .split("")
        .filter(c => 
            c != '!' &&
            c != ' ' &&
            c != ',' &&
            c != '.');
    
    const reversed = Array.from(filtered).reverse();
        
    for (let i = 0; i < filtered.length; ++i) {
        if (filtered[i] != reversed[i])
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
