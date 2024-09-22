const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let alpha = str
    .toLowerCase()
    .split('')
    .filter((char) => alphanumerical.includes(char))
    .join('')

    let revAlpha = alpha.split('').reverse().join('')

    return alpha === revAlpha    
};

// Do not edit below this line
module.exports = palindromes;
