function getWeather(code) {

  let weather = null;

  switch (code) {
    case '01d':
    case '01n':
      weather = 'sunny';
      break;
    case '02d':
    case '02n':
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      weather = 'cloudy';
      break;
    case '09d':
    case '09n':
    case '10d':
    case '10n':
      weather = 'rainy';
      break;
    case '11d':
    case '11n':
      weather = 'storm';
      break;
    case '13d':
    case '13n':
      weather = 'snow';
      break;  
    case '50d':
    case '50n':
      weather = 'mist';
      break;
    default: 
      weather= 'sun'
  }

  return weather;
}

export default getWeather;