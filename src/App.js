import React, { Component } from 'react';
// import logo from './logo.svg';
import './Styles/App.css';
import { TodaysWeather, SevenHourForecast, TenDayForecast } from './Data-iterator'
import CurrentWeather from './CurrentWeather'
import SevenHour from './SevenHour';
import Data from './mock-data';
import Search from './Search'
import TenDay from './TenDay'



// const sevenHourWeather = new SevenHourForecast();

class App extends Component {
  constructor() {
    super();

    this.state = {
      todaysWeather: TodaysWeather(Data),
      SevenHourForecast: SevenHourForecast(Data),
      TenDayForecast: TenDayForecast(Data)
    }
  }

  render() {
    return (
      <div className="App">
        <Search />
        <CurrentWeather   
            location={this.state.todaysWeather.location}
            day={this.state.todaysWeather.day}
            currentTemp={this.state.todaysWeather.currentTemp}
            high={this.state.todaysWeather.high}
            low={this.state.todaysWeather.low}
            description={this.state.todaysWeather.description}
            weatherIcon={this.state.todaysWeather.weatherIcon} />
        <SevenHour
            SevenHour={this.state.SevenHourForecast} />
        <TenDay 
        TenDay={this.state.TenDayForecast} />  
      </div>
    );
  }
}

export default App;
