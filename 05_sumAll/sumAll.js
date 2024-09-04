const sumAll = function(firstNum, secondNum) {
    if ((typeof(firstNum) !== "number" || typeof(secondNum) !== "number") 
        || (firstNum % 1 !== 0 || secondNum % 1 !== 0) 
        || (firstNum < 0 || secondNum < 0)) {
        return "ERROR"
    }

    if (firstNum > secondNum) {
        let swap = firstNum;
        firstNum = secondNum;
        secondNum = swap;
    }
    steps = secondNum - firstNum;
    value = secondNum;
    for (let i = 0; i < steps; i++) {
        value += --secondNum
    }
    return value;
};

// Do not edit below this line
module.exports = sumAll;
