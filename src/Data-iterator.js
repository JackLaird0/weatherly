import Data from './mock-data';

function TodaysWeather(data) {
  return ({
    location: data.current_observation.display_location.full,
    currentTemp: data.current_observation.temp_f,
    high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    day: data.forecast.simpleforecast.forecastday[0].date.pretty,
    description: data.forecast.simpleforecast.forecastday[0].conditions,
    weatherIcon: data.forecast.simpleforecast.forecastday[0].icon_url
  })
}


// class SevenHourForecast{
//   constructor() {
//     this.hour = Data.hourly_forecast[0].FCTTIME.civil
//     this.weatherIcon = Data.hourly_forecast[0].icon_url
//     this.forecastTemp = Data.hourly_forecast[0].temp.english
//   }

  // getDataForSeven() {
  //   // for over Data.hourly_forecast to find current time based on current/date/time
  //     // when found start i at 0 and go up to 7 
  //     // place the data in an array to show the date
  //     // and magic goes here

  // }
// }

export  {TodaysWeather} 
        // SevenHourForecast}