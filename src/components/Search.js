function Search({ value, onChange }) {

  return (
    <div className="search__input-wrap">
      <input className="search__input" type="text" name="city" value={value} onChange={onChange} placeholder="Enter city"/>
    </div>
  );
}

export default Search;