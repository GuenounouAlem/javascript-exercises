const removeFromArray = function(array) {
    newArray = [];
    for (const item of array) {
        let match = 0;
        for (const elem of arguments) {
            if (item === elem) {
                match++;
                break;
            }          
        }
        if (match > 0) {
            continue;
        }
        newArray.push(item);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
