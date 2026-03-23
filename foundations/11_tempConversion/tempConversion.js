const convertToCelsius = function(number) {
  return +((number - 32) / 1.8).toFixed(1)
};

const convertToFahrenheit = function(number) {
  return +(number * 1.8 + 32).toFixed(1)
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
