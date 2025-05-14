import React from 'react'
import './FlightProps.css';
import FlightPage from './FlightPage';




const FlightProps = () => {
  return (
    <>
    <div className="Emirates">
    <div className="Emirates-card-container">
    <div className="flight-banner-card">
    <div className="cheapest-fastest">
        <FlightPage best='Best' price='$900' time='9hr 50min'/>
    </div>
    <div className="cheapest-fastest">
        <FlightPage best='Cheapest' price='$900' time='9hr 50min'/>
    </div>
    <div className="cheapest-fastest">
        <FlightPage best='Fastest' price='$900' time='9hr 50min'/>
    </div>
    <div className="stop-button">
    <div className='never-giveup'>Stops</div>
    </div>

  <div>
    </div>
    </div>
  </div>
    </div>
    </>
  )
}

export default FlightProps