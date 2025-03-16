import React from 'react'
import './Invest.css'
import InvestImg from '../../assets/InvestImg/InvestImg.png'

const Invest = () => {
  return (
    <a href='#' target="_blank" className="Invest-container-link">
    <div className='Invest-container'>
        <div className="Invest-content">
            <div className="invest-content-1">
            <div className="invest-heading">
                <p className='invest'>Invest</p>
                <p className='Be-smart'>Be a smart traveler and secure <br />
                your next adventure today!
                </p>
            <p className='watch-money'>Watch your money grow--turn your travel fund into an <br />
            opportunity to save smarter and travel better!</p>
            <button className='invest-btn'>LEARN MORE</button>
            </div>
            </div>
            <div className="invest-image">
                <img src={InvestImg} alt="" />
            </div>
            
        </div>
    </div>
    </a>
  )
}

export default Invest