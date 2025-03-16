import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import './Help.css';

const Help = (props) => {
    return (
        <div className='help-container'>
            <h3>We are here to help</h3>
            <div className='flexible'>
            <div className="help-box">
                <div className="help-box1">
                    <div className="help-content">
                    <h4>{props.heading}</h4>
                    <p>{props.paragraph}
                    </p>
                <div className="help-call">
                    <div className='call'>
                    <FaPhoneAlt width={24} height={24} />
                </div>
                <div  className="Triwize-para">
                    <a href="tel:1234-5678-9012" style={{ textDecoration: 'none' }}  >
        <span className='emergencry'>{props.emergency}</span>
                    </a>
                </div>
                </div>
                </div>
                <div className="help-img">
                <img src={props.girl} alt="" />
                </div>
        </div>
            </div>
             <div className="save-money">
                <div className='save-content-1'>
                    <div className='inner-content'>
                    <div className="small-contents4">
                      <h4>{props.smallHead}</h4>
                      <p>{props.help}</p>
                    </div>
                    </div>
                    <div className="text">
              <input className='in' type="email" placeholder='Enter...' />
              <button className='subscribe-btn'>→</button>
            </div>
                    {/* <input className='emailbox' type="email" placeholder='Email' /> */}
                </div>
                <div className='coin-image'>
                <img src={props.coin_img} alt="" />
                </div>
             </div>
             </div>
        </div>
    )
}

export default Help