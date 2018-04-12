import React, { Component } from 'react';
// import logo from './logo.svg';
import './Styles/App.css';
import { TodaysWeather } from './Data-iterator' // , SevenHourForecast, TenDayForecast
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
    fetch('http://api.wunderground.com/api/ebc1926fade9895d/forecast/geolookup/conditions/q/CO/Denver.json')
      .then(promise => promise.json()
        .then((data) => {
          this.setState({
            todaysWeather: TodaysWeather(data)
            // SevenHourForecast: SevenHourForecast(data),
            // TenDayForecast: TenDayForecast(data)
          })
          console.log(this.state)
        })).catch(error => console.log('error', error))
  }

  render() {
    return (
      <div className="App">
        {this.componentDidMount()}
        <Search />
        <CurrentWeather   
            location={this.state.todaysWeather.location}
            day={this.state.todaysWeather.day}
            currentTemp={this.state.todaysWeather.currentTemp}
            high={this.state.todaysWeather.high}
            low={this.state.todaysWeather.low}
            description={this.state.todaysWeather.description}
            weatherIcon={this.state.todaysWeather.weatherIcon} />
        {/* <SevenHour
            SevenHour={this.state.SevenHourForecast} />
        <TenDay 
        TenDay={this.state.TenDayForecast} />   */}
      </div>
    );
  }
}

export default App;
