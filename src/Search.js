import React, { Component } from 'react';
import './Styles/search.css'

class Search extends Component {
  constructor() {
    super();

    this.state = {
      cityData: '',
      cityArray: []
    }

    this.saveUserInput = this.saveUserInput.bind(this);
    this.saveCity = this.saveCity.bind(this);
  }

  saveCity(e) {
    this.setState({cityArray: []})
    this.setState({cityArray: [this.state.cityData]})
    e.preventDefault();
  }

  saveUserInput(e) {
    this.setState({cityData: e.target.value});
  }


  render() {
    return (
      <div>
        <input type="text" placeholder="Search for your city" className="search-input" onChange={this.saveUserInput} /> 
        <button className="submit-button" onClick={this.saveCity}> Submit </button>
      </div>
    )
  }
}

export default Search