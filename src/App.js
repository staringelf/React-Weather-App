import { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherBox from "./components/WeatherBox";

function App() {

  const [cityInfo, setCityInfo] = useState({});

  const [mood, setMood] = useState("storm");

  function updateCity (city) {
    setCityInfo(city)
  }

  return (
    <div className="wrapper" style={{ backgroundImage: `url(../images/${mood}.jpg)`}}>
      <div className="container">
        <SearchBox city={cityInfo.city} updateCity={updateCity}/>
        <WeatherBox setMood={setMood} cityInfo={cityInfo} />
      </div>
    </div>
  );
}

export default App;
