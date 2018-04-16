import React, { Component } from 'react';
import './Styles/App.css';
import { TodaysWeather, SevenHourForecast, TenDayForecast } from './Data-iterator';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import Data from './mock-data';
import Search from './Search';
import TenDay from './TenDay';
import Welcome from './Welcome';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todaysWeather: TodaysWeather(Data),
      SevenHourForecast: SevenHourForecast(Data),
      TenDayForecast: TenDayForecast(Data),
      WelcomeScreen: false
    }
  }
  
  render() {
    const showWeather =
    <div>
      <div className="top-container">
        <div className="search-current">
          <Search />
          <CurrentWeather   
              location={this.state.todaysWeather.location}
              day={this.state.todaysWeather.day}
              currentTemp={this.state.todaysWeather.currentTemp}
              high={this.state.todaysWeather.high}
              low={this.state.todaysWeather.low}
              description={this.state.todaysWeather.description}
              weatherIcon={this.state.todaysWeather.weatherIcon} />
        </div>
        <SevenHour
            SevenHour={this.state.SevenHourForecast} />
      </div>
      <div className="tenday-forecast">
        <TenDay 
        TenDay={this.state.TenDayForecast} />  
      </div>
    </div>

    const showWelcome =
    <div className="Welcome-screen">
      <Welcome />
      <Search />
    </div>

    return (
      <div className="App">
       {this.state.WelcomeScreen ? showWelcome : showWeather}
      </div>
    );
  }
}

export default App;
