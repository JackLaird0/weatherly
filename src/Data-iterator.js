const TodaysWeather = data => {
  return ({
    location: data.current_observation.display_location.full,
    currentTemp: data.current_observation.temp_f,
    high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    day: data.forecast.simpleforecast.forecastday[0].date.weekday,
    description: data.forecast.simpleforecast.forecastday[0].conditions,
    weatherIcon: data.forecast.simpleforecast.forecastday[0].icon_url
  })
}

const SevenHourForecast = data => {
  const hourlyForecastRawData = data.hourly_forecast.slice(0, 7);
  let hourlyForecastCleanedData = [];
  hourlyForecastRawData.forEach( (hour, index) => {
    let dataObject = {hour: data.hourly_forecast[index].FCTTIME.civil, 
                      weatherIcon: data.hourly_forecast[index].icon_url,
                      forecastTemp: data.hourly_forecast[index].temp.english 
                    }
    hourlyForecastCleanedData.push(dataObject)
  })
  return (
    hourlyForecastCleanedData
  )
}

const TenDayForecast = data => {
  let TenDayForecastCleanedData = [];
  data.forecast.txt_forecast.forecastday.forEach( (day, index) => {
    let dataObject = {day: day.title,
                      weatherIcon: day.icon_url,
                      weather: day.fcttext}
    TenDayForecastCleanedData.push(dataObject)
  })
  return TenDayForecastCleanedData
}

export  {TodaysWeather, 
        SevenHourForecast,
        TenDayForecast}