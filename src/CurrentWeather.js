import React from 'react';
import './Styles/CurrentWeather.css';

export default function CurrentWeather(props) {
  const { location, day, high, low, weatherIcon, currentTemp, description } = props;
  return (
    <div className="weather-card">
      <p className="location"> {location} </p>
      <p className="week-day"> {day}, <span className="today"> Today </span> </p>
      <p className="high-low"> <span className="high">{high}°</span>/<span className="low"> {low}° </span></p>
      <i className={`wi wi-wu-${weatherIcon} current-temp-icon`} />
      <p className="temp"> {currentTemp}° F </p>
      <p className="description"> {description} </p>
    </div>
  );
}
