import React, { useState, useEffect } from 'react';

const SearchBar = ({setCity}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setCity(searchTerm.toLowerCase());
  };

  useEffect(() => {
    if (searchTerm) {

    }
  }, [searchTerm]);

  return (
    <div className="search">
        <input className="search-input" onChange={handleChange}></input>
        <button className="search-button" onClick={handleClick}>Search</button>
        </div>
  )
}

export default SearchBar;