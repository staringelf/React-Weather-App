import icons from "../icons";
import getWeather from "../lib/getWeather";
import kelvinToCelcius from "../lib/kelvinToCelcius";

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const day = new Date().getDay();
const forecastDays = DAYS.slice(day, DAYS.length).concat(DAYS.slice(0, day));

function Forecast ({ data }) {
  return (
    <div className="forecast">
      <div className="forecast__items">
      {data.list.slice(0, 7).map((item, index) => (

        <div className="forecast__item" key={index}>
          <div className="icon icon--forecast">
            <img src={icons[getWeather(item.weather[0].icon)]} alt={getWeather(item.weather[0].icon)} />
          </div>  
          <h3 className="forecast__day">{forecastDays[index]}</h3>
          <p className="forecast__main">{ item.weather[0].main }</p>
          <p className="forecast__desc">{ item.weather[0].description }</p>
          <p className="forecast__temp">{ Math.round(kelvinToCelcius(item.main.temp_min)) } °C / { Math.round(kelvinToCelcius(item.main.temp_max)) } °C</p>
          <div className="forecast__detail">
            <span className="forecast__label">Humidity</span>
            <span className="forecast__value">{item.main.humidity} %</span>
          </div> 
          <div className="forecast__detail">
            <span className="forecast__label">Wind</span>
            <span className="forecast__value">{item.wind.speed} m/s</span>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Forecast;