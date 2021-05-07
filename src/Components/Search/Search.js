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
    e.target.value = '';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setCity(searchTerm.toLowerCase());
      e.target.value = '';
    }
  };

  return (
    <div className="search" data-testid="search-test">
      <div className="hint-container">
        <Hint className="hint" options={cities} allowTabFill>
          <input
            className="search-input"
            placeholder="City name goes here"
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            data-testid="search-input"
            >
          </input>
        </Hint>
      </div>
      <button 
      className="search-button" 
      onClick={handleClick}
      data-testid="search-button"
      >Search</button>
    </div>
  )
}

export default SearchBar;