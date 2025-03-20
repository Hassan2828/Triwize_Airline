import React from "react";
import "./InternationalFlight.css";
import { FaArrowRightLong } from "react-icons/fa6";

const InternationalFlight = (props) => {

  return (
    <> 
        <div className="flight-card-1">
          <div className="flight-img">
            <img src={props.image} alt="" />
          </div>
          <div className="flight-content">
            <div className="country-city">
              <h6>{props.heading}</h6>
              <FaArrowRightLong />
              <h6>{props.main}</h6>
            </div>
            <div className="card-date">
              <h6>{props.date}</h6>
            </div>
            <div className="card-price">
              <div className="amount">{props.amount}</div>
              <div>
                <button className="btn-purple">{props.booking}</button>
              </div>
            </div>
          </div>
        </div>

    </>
  );
};

export default InternationalFlight;
