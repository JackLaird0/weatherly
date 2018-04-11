import React from 'react';
import './Styles/CurrentWeather.css'

export default function CurrentWeather(props) {
  
    return (
      <div className="weather-card">
        <h2> Weather for {props.day} </h2>
        <h2> {props.location} </h2>
        <h2> Today's High is {props.high} and the low for the day is {props.low} </h2>
        <h2> Current Temperature: {props.currentTemp} degrees </h2>
        <h2> The current weather is {props.description} <img src={props.weatherIcon} className="current-temp-icon" alt={props.description}/> </h2>
      </div>
    )
  }
