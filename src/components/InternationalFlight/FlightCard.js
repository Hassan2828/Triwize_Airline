import React,{ useState, useCallback, useRef, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import InternationalFlight from "./InternationalFlight";
import Mumbai from "../../assets/InternationalCard/Mumbai.png";
import Hydarabad from "../../assets/InternationalCard/Hydrabad.png";
import Delhi from "../../assets/InternationalCard/Delhi.png";
import "./FlightCard.css";

const FlightCard = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1300 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1250 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <>
      <div className="international-flight">
        <div className="international-content">
          <div className="international-header">
            <h3>Latest International Deals</h3>
          </div>
          <div className="international-card">
            <div className="ticket-details">
              <div className="one-way">
                <p>One way Trip</p>
                <p>Round Trip</p>
              </div>
                <Carousel responsive={responsive} >  
                <div className="card-gallerys">           <InternationalFlight
                image={Mumbai}
                heading="New York"
                main="Mumbai"
                date="Jan 25, 2025"
                amount="$560*"
                booking="Book"
              />
               <InternationalFlight
                image={Hydarabad}
                heading="San Francisco"
                main="Hyderabad"
                date="Jan 13, 2025"
                amount="$425*"
                booking="Book"
              />
               <InternationalFlight
                image={Delhi}
                heading="Chicago"
                main="Delhi"
                date="Feb 28, 2025"
                amount="$750*"
                booking="Book"
              />
                 <InternationalFlight
                image={Mumbai}
                heading="New York"
                main="Mumbai"
                date="Jan 25, 2025"
                amount="$560*"
                booking="Book"
              />
            </div>
              </Carousel>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightCard;
