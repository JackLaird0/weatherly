import React, { Component } from 'react';
import Trie from '../node_modules/@mrayanne113/tdd/scripts/Trie.js';
import Cities from './Cities.js';
import './Styles/search.css';

const tree = new Trie();
tree.populate(Cities.city);

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
    this.setState({
      cityData: e.target.value,
    });
  }

  render() {
    tree.suggest(this.state.cityData);
    let suggest = null;
    if (tree.suggestArr) {
      suggest = tree.suggestArr.map((word, index) => (<option key={index}>{word}</option>));
    }

    return (
      <div>
        <form>
          <input
            type="text"
            list="city"
            placeholder="Search for your city"
            className="search-input"
            onChange={this.saveUserInput}
            alue={this.state.cityData}
          />
          <datalist id="city">
            {suggest}
          </datalist>
          <input
            className="submit-button"
            type="submit"
            onClick={(e) => {
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
