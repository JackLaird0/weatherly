import React from 'react';
import './Styles/SevenHour.css'

const SevenHour = props => {
  return (
    <div className="hour-container">
      <h2 className="title"> Today's Weather Hourly </h2> {
        props.SevenHour.map((hourly, index) => {
          return (
            <div className="hour-card" key={index}>
              <h2 className="hour"> {hourly.hour} </h2>
              <div className="temp-icon">
                <i className={'wi wi-wu-' + hourly.weatherIcon + ' weather-icon'} />
                <h2 className="hourly-temp"> {hourly.forecastTemp}° F</h2>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default SevenHour;
