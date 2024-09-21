const add = function(num1, num2) {
	return +num1 + +num2
};

const subtract = function(num1, num2) {
  return +num1 - +num2   
};

const sum = function(array) {
  if (array.length) {
    let sum = array.reduce((total, value) => {
      return total + value
    })
    return sum
  } else {
    return 0
  }
  
};

const multiply = function(array) {
  if (array.length) {
    let sum = array.reduce((total, value) => {
      return total * value
    })
    return sum
  } else {
    return 0
  }
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
	if (num <= 1) {
    return 1
  }
  return num * factorial(num - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
