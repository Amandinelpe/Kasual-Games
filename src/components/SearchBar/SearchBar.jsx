import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from 'react-icons/bi';
import './SearchBar.css';

const SearchBar = () => {
  const [ searchValue, setSearchValue ] = useState("");
  const navigate = useNavigate();

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onKeyDown = (e) =>{
    if(e.keyCode === 13){
      if (searchValue.length < 3) {
        alert("Please type more than 3 characters");
      } else {
        navigate(`/search/${searchValue}`);
      }
    }
  }

  return (
    <div className="search">
      <BiSearchAlt className="input-search-icon"/>
      <input
        type="text"
        name="SearchBar"
        id="SearchBar"
        placeholder="Search"
        value={searchValue}
        onChange={handleSearchValue}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default SearchBar;

