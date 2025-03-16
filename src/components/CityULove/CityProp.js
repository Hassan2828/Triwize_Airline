import React from "react";
import "./CityProp.css";
import CityULove from "./CityULove";

import Hydrabad from "../../assets/CityULove/Hydrabad_img.png";
import Delhi from "../../assets/CityULove/Delhi_img.png";
import Pune from "../../assets/CityULove/Pune.png";
import Bangalore from "../../assets/CityULove/Bangalore.jpeg";
import Kolkata from "../../assets/CityULove/kolkata.jpeg";
import Mumbai from "../../assets/CityULove/Mumbai.png";
import Chennai from "../../assets/CityULove/Channai.png";
import Ahmedabad from "../../assets/CityULove/Ahmendabad.png";
import Bhopal from "../../assets/CityULove/Bhopal.png";

const CityProp = () => {
  return (
    <>
      <div className="city-container">
        <div className="city-love">
          <h2>Cities You Might Love</h2>
          <div className="city-wise">
            <div className="ticket-details">
              <div className="love-one">
                <p>India</p>
                <p>USA</p>
              </div>
              <div className="city-box">
                <div className="city-row">
                  <CityULove city_img={Hydrabad} city="Hyderabad" />
                  <CityULove city_img={Delhi} city="New Delhi" />
                  <CityULove city_img={Pune} city="Pune" />
                  <CityULove city_img={Bangalore} city="Bangalore" />
                  <CityULove city_img={Kolkata} city="Kolkata" />
                  <CityULove city_img={Mumbai} city="Mumbai" />
                  <CityULove city_img={Chennai} city="Chennai" />
                  <CityULove city_img={Ahmedabad} city="Ahmedabad" />
                  <CityULove city_img={Bhopal} city="Bhopal" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CityProp;
