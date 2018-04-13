import React, { Component } from 'react';
// import logo from './logo.svg';
import './Styles/App.css';
import { TodaysWeather, SevenHourForecast, TenDayForecast } from './Data-iterator' // , SevenHourForecast, TenDayForecast
import CurrentWeather from './CurrentWeather'
import SevenHour from './SevenHour';
// import Data from './mock-data';
import Search from './Search'
import TenDay from './TenDay'

class App extends Component {
  constructor(data) {
    super();

    this.state = {
      todaysWeather: '',
      SevenHourForecast: '',
      TenDayForecast: ''
    }
  }

  componentDidMount() {
    fetch('https://api.wunderground.com/api/81e7db909187627f/hourly/conditions/forecast10day/q/CO/Colorado%20Springs.json').then( reponse => reponse.json()).then( data => {
      this.setState({
        todaysWeather: TodaysWeather(data),
        SevenHourForecast: SevenHourForecast(data),
        TenDayForecast: TenDayForecast(data)
      })
    }).catch(error => console.log('error', error))
  }

  render() {
    const sevenHour = !this.state.SevenHourForecast ? null : <SevenHour SevenHour={this.state.SevenHourForecast} />;
    const tenDay = !this.state.TenDayForecast ? null : <TenDay TenDay={this.state.TenDayForecast} /> ;
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
        { sevenHour }
        { tenDay }
      </div>
    );
  }
}

export default App;
