import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { TodaysWeather, SevenHourForecast } from './Data-interator'
import CurrentWeather from './CurrentWeahter'
import SevenHour from './SevenHour'

const todaysWeather = new TodaysWeather();
const sevenHourWeather = new SevenHourForecast();

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }


  render() {
    return (
      <div className="App">
        <CurrentWeather   
            location={todaysWeather.location}
            day={todaysWeather.day}
            currentTemp={todaysWeather.currentTemp}
            high={todaysWeather.high}
            low={todaysWeather.low}
            description={todaysWeather.description}
            weatherIcon={todaysWeather.weatherIcon}/>
        <SevenHourForecast 
            hour={sevenHourWeather.hour}
            weatherIcon={sevenHourWeather.weatherIcon}
          forecastTemp={sevenHourWeather.forecastTemp}/>
      </div>
    );
  }
}

export default App;
