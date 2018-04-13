import React from 'react';
import './Styles/search.css'

const Search = () => {
  return (
    <div>
      <input type="text" placeholder="Search for your city" className="search-input"/>
      <button className="submit-button"> Submit </button>
    </div>
  )
}

export default Search