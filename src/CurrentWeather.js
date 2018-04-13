import React from 'react';
import './Styles/CurrentWeather.css'

export default function CurrentWeather(props) {
  
    return (
      <div className="weather-card">
        <p className="location"> {props.location} </p>
        <p className="week-day"> {props.day}, <span className="today"> Today </span> </p>
        <p className="high-low"> <span className="high">{props.high}°</span>/<span className="low"> {props.low}° </span></p>
        <i className={'wi wi-wu-' + props.weatherIcon + ' current-temp-icon'}> </i>
        <p className="temp"> {props.currentTemp}° F </p>
        <p className="description"> {props.description} </p>
        
      </div>
    )
  }
