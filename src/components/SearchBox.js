import { geoApiOptions, GEO_API_URL } from "../api.js";
import useDebounce from "../lib/useDebounce.js";
import { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

function SearchBox({ city, updateCity }) {

  const [value, setValue] = useState("");

  const [resultsVisibility, setResultsVisibility] = useState(true);

  const [results, setResults] = useState([{
    city: 'Nowhere Land',
    id: 87208
  }]);

  useEffect(() => {
    setValue(city);
  }, [city])

  const debouncedValue = useDebounce(value, 500);

  function handleSearchChange(e) {
    setValue(e.target.value);
    setResultsVisibility(true);
  }

  useEffect(() => {
    fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${debouncedValue}`, geoApiOptions)
      .then(res => res.json())
      .then(json => {
        console.log(json.data)
        setResults(json.data)
      })
      .catch(err => console.error(err));
  }, [debouncedValue])

  return (
    <div className="search-box">
      <Search onChange={handleSearchChange} value={value} setResultsVisibility={setResultsVisibility}/>
      {resultsVisibility ? <SearchResults results={results} updateCity={updateCity} setResultsVisibility={setResultsVisibility} /> : null}
    </div>
  );
}

export default SearchBox;