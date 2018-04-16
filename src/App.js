import React, { Component } from 'react';
import './Styles/App.css';
import { TodaysWeather, SevenHourForecast, TenDayForecast } from './Data-iterator';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
// import Data from './mock-data';
import Search from './Search';
import TenDay from './TenDay';
import Welcome from './Welcome';

class App extends Component {
  constructor(data) {
    super();

    this.state = {
      todaysWeather: '',
      SevenHourForecast: '',
      TenDayForecast: '',
      WelcomeScreen: false
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
    const { todaysWeather, SevenHourForecast, TenDayForecast } = this.state;
    const currentW = !todaysWeather ? null 
                                    : <CurrentWeather
                                      location={todaysWeather.location}
                                      day={todaysWeather.day}
                                      currentTemp={todaysWeather.currentTemp}
                                      high={todaysWeather.high}
                                      low={todaysWeather.low}
                                      description={todaysWeather.description}
                                      weatherIcon={todaysWeather.weatherIcon}
                                       />;
    const sevenHour = !SevenHourForecast ? null 
                                         : <SevenHour SevenHour={SevenHourForecast} 
                                          />;
    const tenDay = !TenDayForecast ? null 
                                   : <TenDay TenDay={TenDayForecast} 
                                    /> ;

    const showWeather =
    <div>
      <div className="top-container">
        <div className="search-current">
          <Search />
          { currentW }
        </div>
        { sevenHour }
      </div>
      <div className="tenday-forecast">
        { tenDay }
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
