export function weatherFromCode(weatherCode) {
  // Based on Weather interpretation codes, https://open-meteo.com/en/docs
  // implmentation here does some simplifications and doesn't follow the standard codes fully

  if ([0, 1].includes(weatherCode)) {
    return "Clear";
  }

  if ([2, 3, 45, 48].includes(weatherCode)) {
    return "Cloudy";
  }

  if (
    [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)
  ) {
    return "Rainy";
  }

  if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) {
    return "Snowy";
  }

  if ([95, 96, 99].includes(weatherCode)) {
    return "Thunder";
  }
}

export function celsiusToFahrenheit(celsius) {
  return parseFloat(((celsius * 1.8) + 32).toFixed(2));
}
