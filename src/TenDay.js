import React from 'react';
import './Styles/TenDay.css'

const TenDay = props => {
  console.log(props)
  //   return null
    return (
      <div className="day-container"> {
      props.TenDay.map( (daily, index) => {
      return (
        <div className="day-card">
          <h2 className="day"> {daily.day} </h2>
          <i className={'wi wi-wu-'+ daily.weatherIcon + ' weather-icon'}> </i>
          <h2 className="high-low"> <span className="high"> {daily.high}°</span>/ <span className="low">{daily.low}° </span> </h2>
          
        </div>
      )})
    }
      </div>
      )
  }
  
  export default TenDay