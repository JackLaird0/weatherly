import React from 'react';

const TenDay = props => {
  console.log(props)
  //   return null
    return (
      <div> 
      {
      props.TenDay.map( (daily, index) => {
      return (
        <div className="weatherCard">
          <h2> {daily.day} </h2>
          <img src={daily.weatherIcon} />
          <h2> {daily.weather} </h2>
        </div>
      )})
    }
      </div>
      )
  }
  
  export default TenDay