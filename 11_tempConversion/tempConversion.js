const convertToCelsius = function(f) {

    const celsius = (f - 32) * (5/9);
    const roundedCelcius = Math.round(celsius * 10)/10;
    return roundedCelcius;

};

const convertToFahrenheit = function(c) {

  const farenheit = (c * (9/5)) + 32
  const roundedFarenheit = Math.round(farenheit * 10)/10;
  return roundedFarenheit;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
