import React, { Component } from 'react';
import './Styles/App.css';
import { TodaysWeather, SevenHourForecast, TenDayForecast } from './Data-iterator';
import { apiKey } from './API-info';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
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
      WelcomeScreen: true 
    }

    this.updateLocation = this.updateLocation.bind(this)
  }

checkStorage() {
  if (localStorage.location) {
    const retrieveLocation = JSON.parse(localStorage.getItem('location'));
    return retrieveLocation;
  } else {
    return false;
  }
}

updateLocation (location) {
  const localLocation = JSON.stringify(location)
  localStorage.setItem('location', localLocation)

  fetch(`https://api.wunderground.com/api/${apiKey()}/hourly/conditions/forecast10day/q/${location.split(', ')[1]}/${location.split(', ')[0]}.json`).then( reponse => reponse.json()).then( data => {
      this.setState({
        todaysWeather: TodaysWeather(data),
        SevenHourForecast: SevenHourForecast(data),
        TenDayForecast: TenDayForecast(data),
        WelcomeScreen: false
      })
    }).catch(error => alert(error , error))
}

componentDidMount() {

  this.checkStorage() ? this.updateLocation(this.checkStorage()) : this.setState( {WelcomeScreen: true})
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
      <Search updateLocation={this.updateLocation}/>
    </div>    

    return (
      <div className="App">
       {this.state.WelcomeScreen ? showWelcome : showWeather}
      </div>
    );
    console.log()
  }
}

export default App;
