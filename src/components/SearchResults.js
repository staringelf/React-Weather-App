function SearchResults ({ results, updateCity, setResultsVisibility }) {

  return (
    <div className="search__results-board">
      {results && results.length ? 
        (<ul className="search__results">
          {results.map(({ city, id, latitude, longitude }) => (
            <li className="search__result" key={id}>
              <button onClick={() => {
                setResultsVisibility(false);
                updateCity({latitude, longitude, city})
              }
              }>
                
                {city}
              </button>
            </li>
          ))}      
        </ul>) : (
          <p className="search__results-board-info"> No Search Results </p>
        )
      }
    </div>
  )
}

export default SearchResults;
