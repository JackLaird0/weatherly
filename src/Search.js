import React, { Component } from 'react';
import './Styles/search.css';

class Search extends Component {
  constructor(props) {
    super();

    this.state = {
      cityData: '',
      cityArray: [],
    };

    this.saveUserInput = this.saveUserInput.bind(this);
    this.saveCity = this.saveCity.bind(this);
  }

  saveCity(e) {
    this.setState({ cityArray: [] });
    this.setState({ cityArray: [this.state.cityData] });
    e.preventDefault();
  }

  saveUserInput(e) {
    this.setState({ cityData: e.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search for your city" className="search-input" onChange={this.saveUserInput} value={this.state.cityData} />
          <input
            className="submit-button"
            type="submit"
            onClick= {(e) => {
            e.preventDefault();
            this.props.updateLocation(this.state.cityData);
          }}
          />
        </form>
      </div>
    );
  }
}

export default Search;
