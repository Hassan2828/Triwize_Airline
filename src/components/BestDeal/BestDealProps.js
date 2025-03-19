import React, { useState } from "react";
import "./BestDealProps.css";
import BestDeal from "./BestDeal";
import AirIndia from "../../assets/bestDeals/AirIndia.png";
import Vector from "../../assets/bestDeals/Vector.png";

const BestDealProps = () => {
  const [toggletrip, setToggleTrip] = useState(1); // State to track active tab

  function updateToggleTrip(id) {
    setToggleTrip(id); // Update state based on tab click
  }

  return (
    <div className="best-deals">
      <div className="deals-container">
        <div className="deal-heading">
          <p>Best Deals On Domestic Flights</p>
        </div>
        <div className="ticket-details">
          {/* Tabs for One Way Trip and Round Trip */}
          <div className="one-way">
            <p
              onClick={() => updateToggleTrip(1)}
              id="ways"
              className={toggletrip === 1 ? "active-tab" : ""}
            >
              One Way Trip
            </p>
            <p
              onClick={() => updateToggleTrip(2)}
              className={toggletrip === 2 ? "active-tab" : ""}
            >
              Round Trip
            </p>
          </div>

          {/* Ticket Information */}
          <div className="ticket-info-one">
            {/* Conditional Rendering for One Way Trip */}
            {toggletrip === 1 && (
              <div id="ticket-info-box">
                {[...Array(8)].map((_, index) => (
                  <BestDeal
                    key={index}
                    AirIndia={AirIndia}
                    airIndia="AIRINDIA"
                    price="$200"
                    name="JFK"
                    date="2024/01/25"
                    time="9hr 50min"
                    vectorimg={Vector}
                    stopped="1 stop"
                    delay="DEL"
                    mco="MCO"
                    btn="Book"
                  />
                ))}
              </div>
            )}

            {/* Conditional Rendering for Round Trip */}
            {toggletrip === 2 && (
              <div id="ticket-info-box">
                {[...Array(6)].map((_, index) => (
                  <BestDeal
                    key={index}
                    AirIndia={AirIndia}
                    airIndia="AIRINDIA"
                    price="$200"
                    name="JFK"
                    date="2024/01/25"
                    time="9hr 50min"
                    vectorimg={Vector}
                    stopped="1 stop"
                    delay="DEL"
                    mco="MCO"
                    btn="Book"
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer Note */}
        <div className="condition">
          <p>
            *All fares above were found in last 8 hours. Fares are round trip/one way. Fares incl. all fuel surcharges, taxes& fees and our service fees. Displayed fares are based on historical data, are subject to change and cannot be guaranteed at the time of booking. See all booking terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestDealProps;
