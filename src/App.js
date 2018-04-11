import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { TodaysWeather, SevenHourForecast } from './Data-iterator'
import CurrentWeather from './CurrentWeather'
// import SevenHour from './SevenHour';
import Data from './mock-data';



// const sevenHourWeather = new SevenHourForecast();

class App extends Component {
  constructor() {
    super();

    this.state = {
      todaysWeather: TodaysWeather(Data)

    }
  }

  render() {
    return (
      <div className="App">
        <CurrentWeather   
            location={this.state.todaysWeather.location}
            day={this.state.todaysWeather.day}
            currentTemp={this.state.todaysWeather.currentTemp}
            high={this.state.todaysWeather.high}
            low={this.state.todaysWeather.low}
            description={this.state.todaysWeather.description}
            weatherIcon={this.state.todaysWeather.weatherIcon}/>
        {/* <SevenHourForecast 
            hour={sevenHourWeather.hour}
            weatherIcon={sevenHourWeather.weatherIcon}
          forecastTemp={sevenHourWeather.forecastTemp}/> */}
      </div>
    );
  }
}

export default App;
