import React from 'react';
import './Support.css';
import { FaPhoneAlt } from "react-icons/fa";
import circle from '../../assets/offercard_img/circle.png'

const Support = (props) => {
  return (
    <div className='support'>
      <div className="support-left">
        <div className="support-content">
          <div className="support-icon">
            <FaPhoneAlt size={24} />
            <div className="support-number">
              <p>{props.number}</p>
            </div>
          </div>
          <div className="support-message"> 
            <p>{props.message}</p>
          </div>
          <button className='btn-learn'>{props.button}</button>
        </div>
      </div>
      
      <div className="support-right">
        <div className="support-right-container">
          <div className="support-right-content">
            <p><span>Earn</span><br /><span>{props.triwize}</span></p>
          <p className='Earn-more'>{props.Earn}</p>
          <button className='btn-learn-2'>{props.button}</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Support;