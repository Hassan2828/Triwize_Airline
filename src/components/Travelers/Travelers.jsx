import React, { useState } from 'react';
import './Travelers.css';
import { IoPerson } from 'react-icons/io5';

const Travelers = () => {
  const [numTravelers, setNumTravelers] = useState(1);
  const [showTravelers, setShowTravelers] = useState(false);
  const [adults, setAdults] = useState(1);
  const [seniors, setSeniors] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const increment = (type) => {
    switch (type) {
      case 'adult':
        setAdults(adults + 1);
        break;
      case 'senior':
        setSeniors(seniors + 1);
        break;
      case 'child':
        setChildren(children + 1);
        break;
      case 'infant':
        setInfants(infants + 1);
        break;
      default:
        break;
    }
  };

  const decrement = (type) => {
    switch (type) {
      case 'adult':
        if (adults > 1) setAdults(adults - 1);
        break;
      case 'senior':
        if (seniors > 0) setSeniors(seniors - 1);
        break;
      case 'child':
        if (children > 0) setChildren(children - 1);
        break;
      case 'infant':
        if (infants > 0) setInfants(infants - 1);
        break;
      default:
        break;
    }
  };

  const totalTravelers = adults + seniors + children + infants;

  const handleInputClick = () => {
    setShowTravelers(true);
  };

  const handleDoneClick = () => {
    setNumTravelers(totalTravelers);
    setShowTravelers(false);
  };

  return (
    <>
      <div className="Adult">
        <div className="locations">
          <div>
            <IoPerson />
          </div>
          <input 
            className="from"
            type="text"
            placeholder={`1 Adult`}
            onClick={handleInputClick}
            readOnly={true}
            value={`${totalTravelers} Traveler${totalTravelers > 1 ? 's' : ''}`}
          />
        </div>
      </div>

      {showTravelers && (
        <div className="travelers-container">
          <div className="traveler-row">
            <label>Adults:</label>
            <div className="traveler-controls">
              <button className='travelers__btn' onClick={() => decrement('adult')}>-</button>
              <span>{adults}</span>
              <button className='travelers__btn' onClick={() => increment('adult')}>+</button>
            </div>
          </div>

          <div className="traveler-row">
            <label>Seniors:</label>
            <div className="traveler-controls">
              <button className='travelers__btn' onClick={() => decrement('senior')}>-</button>
              <span>{seniors}</span>
              <button className='travelers__btn' onClick={() => increment('senior')}>+</button>
            </div>
          </div>

          <div className="traveler-row">
            <label>Children:</label>
            <div className="traveler-controls">
              <button className='travelers__btn' onClick={() => decrement('child')}>-</button>
              <span>{children}</span>
              <button className='travelers__btn' onClick={() => increment('child')}>+</button>
            </div>
          </div>

          <div className="traveler-row">
            <label>Infants:</label>
            <div className="traveler-controls">
              <button className='travelers__btn' onClick={() => decrement('infant')}>-</button>
              <span>{infants}</span>
              <button className='travelers__btn' onClick={() => increment('infant')}>+</button>
            </div>
          </div>

          <button onClick={handleDoneClick}>Done</button>
        </div>
      )}
    </>
  );
};

export default Travelers;
