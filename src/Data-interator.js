import Data from './mock-data';

class TodaysWeather {
  constructor() {
    this.location = Data.current_observation.display_location.full;
    this.currentTemp = Data.current_observation.temp_f;
    this.high = Data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    this.low = Data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    this.day = Data.forecast.simpleforecast.forecastday[0].date.pretty;
    this.description = Data.forecast.simpleforecast.forecastday[0].conditions;
    this.weatherIcon = Data.forecast.simpleforecast.forecastday[0].icon_url;
  }
}

export  {TodaysWeather}