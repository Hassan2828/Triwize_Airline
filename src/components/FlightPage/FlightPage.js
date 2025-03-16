import React from 'react';
import './FlightPage.css';

const FlightPage = (Props) => {
  return (
    <>
        <div className="cheapest-fastest">
            <div className="Best-box">
                <div className="best-inner-box">
                    <div className='best-paragraph'>{Props.best}</div>
                    <div className='price-bold'>{Props.price}</div>
                    <div className='less-time'>{Props.time}</div>
                </div>
            </div>
        </div>
    </>
  )
};

export default FlightPage