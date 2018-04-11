import React from 'react';

export default function SevenHour(props) {

  return (
    <div className="weather-card">
      <h2> {props.hour} </h2>
      <h2>{props.weatherIcon}</h2>
      <h2> {props.forecastTemp} </h2>
    </div>
  )
}