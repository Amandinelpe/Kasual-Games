import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
      <div className="search">
        <input
          type="text"
          name="SearchBar"
          id="SearchBar"
          placeholder="🔍 Search"
        />
      </div>
    );
}

export default SearchBar;

