const reverseString = function(text) {
    textLength = text.length;
    newText = '';

    for (let i = textLength - 1; i >= 0; i--) {
        newText += text[i];
    }
    return newText;
};  

// Do not edit below this line
module.exports = reverseString;
