import React, { useState, useEffect } from 'react';
import './search.css';
import { Hint } from 'react-autocomplete-hint';
import cities from '../../assets/citites';

const SearchBar = ({ setCity }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setCity(searchTerm.toLowerCase());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setCity(searchTerm.toLowerCase());
      e.target.value = '';
    }
  };
  useEffect(() => {
    if (searchTerm) {

    }
  }, [searchTerm]);

  return (
    <div className="search">
      <div className="hint-container">
        <Hint className="hint" options={cities} allowTabFill>
          <input
            className="search-input"
            placeholder="City name goes here"
            onKeyDown={handleKeyDown}
            onChange={handleChange}>
          </input>
        </Hint>
      </div>
      <button className="search-button" onClick={handleClick}>Search</button>
    </div>
  )
}

export default SearchBar;