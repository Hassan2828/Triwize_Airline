import React from 'react'
import './FlightProps.css';
import FlightPage from './FlightPage';

import Vector from "../../assets/bestDeals/Vector.png";
import planeflying from '../../assets/EmiratesTicket/Planeflying.png';
import EmiratesTicket from '../EmiratesTicket/EmiratesTicket';

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


    <EmiratesTicket   city='New York' jfk='JFK' time='10:55 AM' day='Friday,7 April 2025' timing='9hr 50min' Vector={Vector} stop='1 stop' del='DEL' dela='Delhi(DEL)' indera='Indira Gandhi International Airport' box='11:05 AM' boxing='Saturday, 8 April 2025' left='3 left at' dolar='$850' per='per traveller' sel='Select' planeflying={planeflying} />

    </div>
    </div>
    </div>
    </>
  )
}

export default FlightProps