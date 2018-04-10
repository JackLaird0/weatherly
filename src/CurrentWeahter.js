import React from 'react';


export default function CurrentWeather(props) {
  
    return (
      <div className="weather-card">
        <h2> {props.location} </h2>
        <h2> Current Temperature: {props.currentTemp} degrees </h2>
        <h2> High and low for the day: {props.high}/{props.low} </h2>
        <h2> The current weather is {props.description} <img src={props.weatherIcon} /> </h2>
      </div>
    )
  }
