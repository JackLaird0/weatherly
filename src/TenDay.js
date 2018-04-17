import React from 'react';
import './Styles/TenDay.css';

const TenDay = props => (
  <div className="day-container"> {
      props.TenDay.map((daily, index) => (
        <div className="day-card" key={index}>
          <h2 className="day"> {daily.day} </h2>
          <i className={`wi wi-wu-${ daily.weatherIcon} weather-icon`} />
          <h2 className="high-low"> <span className="high"> {daily.high}°</span>/ <span className="low">{daily.low}° </span> </h2>
        </div>
      ))
  }
  </div>
);

export default TenDay;
