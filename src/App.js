import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodaysWeather } from './Data-interator'
import CurrentWeather from './CurrentWeahter'

const todaysWeather = new TodaysWeather()

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }


  render() {
    
    return (
      <div className="App">
        <CurrentWeather location={todaysWeather.location}
                        currentTemp={todaysWeather.currentTemp}
                        high={todaysWeather.high}
                        low={todaysWeather.low}
                        description={todaysWeather.description}/>

      </div>
    );
  }
}

export default App;
