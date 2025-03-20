import React, { useState } from "react";
import "./CityProp.css";
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
  const [togglecity, setTogglecity] = useState(1); // State to toggle between India and USA cities

  const indianCity = [
    { img: Hydrabad, city: "Hyderabad" },
    { img: Delhi, city: "New Delhi" },
    { img: Pune, city: "Pune" },
    { img: Bangalore, city: "Bangalore" },
    { img: Kolkata, city: "Kolkata" },
    { img: Mumbai, city: "Mumbai" },
    { img: Chennai, city: "Chennai" },
    { img: Ahmedabad, city: "Ahmedabad" },
    { img: Bhopal, city: "Bhopal" },
    
    { img: Hydrabad, city: "Hyderabad" },
    { img: Delhi, city: "New Delhi" },
    { img: Pune, city: "Pune" },
    { img: Bangalore, city: "Bangalore" },
    { img: Kolkata, city: "Kolkata" },
    { img: Mumbai, city: "Mumbai" },
    { img: Chennai, city: "Chennai" },
    { img: Ahmedabad, city: "Ahmedabad" },
    { img: Bhopal, city: "Bhopal" },
  ];

  const usaCity = [
    { img: Hydrabad, city: "New York" },
    { img: Delhi, city: "Washington" },
    { img: Pune, city: "Ohio" },
    { img: Bangalore, city: "Los Angeles" },
    { img: Kolkata, city: "Chicago" },
    { img: Mumbai, city: "San Francisco" },
    { img: Chennai, city: "Miami" },
    { img: Ahmedabad, city: "Boston" },
    { img: Bhopal, city: "Seattle" },

    { img: Hydrabad, city: "New York" },
    { img: Delhi, city: "Washington" },
    { img: Pune, city: "Ohio" },
    { img: Bangalore, city: "Los Angeles" },
    { img: Kolkata, city: "Chicago" },
    { img: Mumbai, city: "San Francisco" },
    { img: Chennai, city: "Miami" },
    { img: Ahmedabad, city: "Boston" },
    { img: Bhopal, city: "Seattle" },
  ];

  const cities = togglecity === 1 ? indianCity : usaCity;

  return (

    <div className="citylove-container">
      <div className="cities__sub-container">
        <h2 className="cities_title">Cities You Might Love</h2>

        <div className="india__usa">

          <div className="love-one">
            <p
              onClick={() => setTogglecity(1)}
              className={togglecity === 1 ? "active-tab" : ""}
            >
            India
            </p>
            <p
              onClick={() => setTogglecity(2)}
              className={togglecity === 2 ? "active-tab" : ""}
            >
            USA
            </p>
          </div>
        </div>

        <div className="main__city__container">
          <div className="city__row">
            {cities.map((item, index) => (
              <div key={index} className="city__box">
                <div className="city__image">
                  <img src={item.img} alt={item.city} />
                </div>
                <div className="city__name">{item.city}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityProp;


