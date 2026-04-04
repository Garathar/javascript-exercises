const add = function(num1,num2) {
	return num1 + num2
};

const subtract = function(num1,num2) {
	return num1 - num2
};

const sum = function(arr) {
	const sum = arr.reduce((sum,current) => sum+current,0);
  return sum
};

const multiply = function(arr) {
  const multi = arr.reduce((obj,current) => obj * current,1);
  return multi
};

const power = function(base,exponent) {
	return Math.pow(base,exponent)
};

const factorial = function(num) {
	let temp = 1;
  for (let i = num;i > 1;i--){
    temp *= i
  };
  return temp
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
