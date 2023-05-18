const add = function(lhs, rhs) {
	return lhs + rhs;
};

const subtract = function(lhs, rhs) {
	return lhs - rhs;
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((result, item) => result * item, 1);
};

const power = function(lhs, rhs) {
  let result = lhs;

  for (let i = 1; i < rhs; ++i) {
    result *= lhs;
  }

	return result;
};

const factorial = function(n) {
  let result = 1;

  for (let i = 2; i <= n; ++i) {
    result *= i;
  }

	return result;
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
