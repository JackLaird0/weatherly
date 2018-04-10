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

class SevenHourForecast{
  constructor() {
    this.hour = Data.hourly_forecast[0].FCTTIME.civil
    this.weatherIcon = Data.hourly_forecast[0].icon_url
    this.forecastTemp = Data.hourly_forecast[0].temp.english
  }

  getDataForSeven() {
    // for over Data.hourly_forecast to find current time based on current/date/time
      // when found start i at 0 and go up to 7 
      // place the data in an array to show the date
      // and magic goes here

  }
}

export  {TodaysWeather, 
        SevenHourForecast}