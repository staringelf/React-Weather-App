import getWeather from "../lib/getWeather";
import icons from "../icons";
import kelvinToCelcius from "../lib/kelvinToCelcius.js";

function Weather ({ data, setMood }) {
  
  console.log('Data: ', data)

  if (!data.weather){
    return (
      <p>No city is selected</p> 
    )
  }

  const weather = getWeather(data.weather[0].icon);

  setMood(weather);

  return (
    <div>
      <div className="weather-box__header">
      <div className="icon icon--weather">
        <img src={icons[weather]} alt={weather} />
      </div>    
        <h3 className="weather-box__place">{data.city}, {data.sys.country}</h3>
        <h4 className="weather-box__main">{data.weather[0].main}</h4>
        <p className="weather-box__date">{new Date(data.dt * 1000).toDateString()}</p>
        <p className="weather-box__desc">{data.weather[0].description}</p>
      </div>
      <div className="weather-box__info">
        <p className="weather-box__temprature">
          {Math.round(kelvinToCelcius(data.main.temp))} °C
        </p>
        <div className="weather-box__details">
          <div className="weather-box__detail">
            <span className="weather-box__label">
              Feels Like
            </span>
            <span className="weather-box__value">
              {Math.round(kelvinToCelcius(data.main.feels_like))} °C
            </span>
          </div>
          <div className="weather-box__detail">
            <span className="weather-box__label">
              Wind
            </span>
            <span className="weather-box__value">
              {Math.round(data.wind.speed)} m/s
            </span>
          </div>
          <div className="weather-box__detail">
            <span className="weather-box__label">
              Humidity
            </span>
            <span className="weather-box__value">
              {Math.round(data.main.humidity)} %
            </span>
          </div>
          <div className="weather-box__detail">
            <span className="weather-box__label">
              Pressure
            </span>
            <span className="weather-box__value">
              {Math.round(data.main.pressure)} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather;