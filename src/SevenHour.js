import React from 'react';

 const SevenHour = props => {
console.log(props)
//   return null
  return (
    <div> 
    {
    props.SevenHour.map( (hourly, index) => {
    return (
      <div className="weatherCard">
        <h2> {hourly.hour} </h2>
        <img src={hourly.weatherIcon} />
        <h2> {hourly.forecastTemp} </h2>
      </div>
    )})
  }
    </div>
    )
}

export default SevenHour