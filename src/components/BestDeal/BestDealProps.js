import React from "react";
import "./BestDealProps.css";
import BestDeal from "./BestDeal";
import AirIndia from "../../assets/bestDeals/AirIndia.png";
import Vector from "../../assets/bestDeals/Vector.png";

const BestDealProps = () => {
  return (
    <>
        <div className="best-deals">
          <div className="deals-container">
            <div className="deal-heading">
              <p>Best Deals On Domestic Flights</p>
            </div>
            <div className="ticket-details">
              <div className="one-way">
                <p>One way Trip</p>
                <p>Round Trip</p>
              </div>
           <div className="ticket-info-one">
              <div className="ticket-info-box">
                <BestDeal
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
                <BestDeal
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

                  <BestDeal
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

                 <BestDeal
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
                <BestDeal
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
                <BestDeal
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
                <BestDeal
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
                <BestDeal
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
              </div>
            </div>
          </div>
        </div>
        <div className="condition">
            <p>*All fares above were found in last 8 hours. Fares are round trip/one way. Fares incl. all fuel surcharges, taxes& fees and our service fees.  Displayed fares are based on historical data, are subject to change and cannot be guaranteed at the time of booking. See all booking terms and conditions.</p>
        </div>
      </div>
    </>
  );
};

export default BestDealProps;
