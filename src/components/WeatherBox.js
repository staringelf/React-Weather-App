import { useEffect, useState } from "react";
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api.js';
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";

function WeatherBox({ cityInfo, setMood }) {

  const { city, latitude, longitude } = cityInfo;

  const [weather, setWeather] = useState(null);
  const [forecast , setForecast] = useState(null);

  useEffect(() => {
    if (!city) return
    const weatherPromise = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`)
    const forecastPromise = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`)
  
    Promise.all([weatherPromise, forecastPromise])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()

        setWeather(weatherResponse);
        setForecast(forecastResponse);
      })
      .catch(error => console.log(error))
  }, [city, latitude, longitude])

  const data = {
    ...weather, city 
  }

  console.log(data);

  return (
    <div className="weather">
      {weather ? <Weather data={data} setMood={setMood} /> : null }
      {forecast ? <Forecast data={forecast} /> : null}
    </div>
  )
}

export default WeatherBox;