const createConverter = function(converter) {
  return function(value) {
    const convertedValue = converter(value);

    if (Number.isInteger(convertedValue)) {
      return convertedValue;
    }
  
    return parseFloat(convertedValue.toFixed(1));
  }
}

const convertToCelsius = createConverter(
  tempFahrenheit => (tempFahrenheit - 32) * 5 / 9
);

const convertToFahrenheit = createConverter(
  tempCelcius => tempCelcius * 9 / 5 + 32
)

module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
