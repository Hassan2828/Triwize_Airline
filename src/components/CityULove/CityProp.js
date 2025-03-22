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
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


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
    { img: Bhopal, city: "Bhopal" }
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

  let cities = togglecity === 1 ? indianCity : usaCity;

  return (
    <div className="citylove-container">
      <div className="cities__sub-container">
        <h2 className="cities_title">Cities You Might Love</h2>

        <div className="india__usa">
          <div className="love-one">

            <button
              onClick={() => setTogglecity(1)}
              className={togglecity === 1 ? "active-tab" : ""}
            >
              India
            </button>

            <button
              onClick={() => setTogglecity(2)}
              className={togglecity === 2 ? "active-tab" : ""}
            >
              USA
            </button>

          </div>
        </div>

         {/* <div className="main__city__container">
          <div className="city__row">
            {cities.map((item, index) => (
              <div key={index} className="city__box">
                <div className="city__image">
                  <img src={item.img} alt={item.city} />
                </div>
                <div className="city__name">{item.city}</div>
              </div>
            ))}
          </div>
        </div>  */}

      <div className="main__city__container">

        <div className="city__row" style={{display:'unset'}}>

        <Carousel>
          <div className="gg">

          <div className="city__box">
              <div className="city__image">
                <img src={Hydrabad} alt={Hydrabad} />
              </div>
              <div className="city__name">Hydrabad</div>
          </div>

          <div className="city__box">
              <div className="city__image">
                <img src={Delhi} alt={Delhi} />
              </div>
              <div className="city__name">New Delhi</div>
          </div>

          <div className="city__box">
              <div className="city__image">
                <img src={Pune} alt={Hydrabad} />
              </div>
              <div className="city__name">Pune</div>
          </div>

          <div className="city__box">
              <div className="city__image">
                <img src={Bangalore} alt={Bangalore} />
              </div>
              <div className="city__name">Bangalore</div>
          </div>

          <div className="city__box">
              <div className="city__image">
                <img src={Kolkata} alt={Kolkata} />
              </div>
              <div className="city__name">kolkata</div>
          </div>
           
          <div className="city__box">
              <div className="city__image">
                <img src={Mumbai} alt={Mumbai} />
              </div>
              <div className="city__name">Mumbai</div>
          </div>

          <div className="city__box">
              <div className="city__image">
                <img src={Chennai} alt={Chennai} />
              </div>
              <div className="city__name">Chennai</div>
          </div>

          <div className="city__box">
              <div className="city__image">
                <img src={Ahmedabad} alt={Ahmedabad} />
              </div>
              <div className="city__name">Ahmedabad</div>
          </div>
           
          <div className="city__box">
              <div className="city__image">
                <img src={Bhopal} alt={Bhopal} />
              </div>
              <div className="city__name">Bhopal</div>
          </div>
           
          </div>

          <div className="gg">

<div className="city__box">
    <div className="city__image">
      <img src={Hydrabad} alt={Hydrabad} />
    </div>
    <div className="city__name">Hydrabad</div>
</div>

<div className="city__box">
    <div className="city__image">
      <img src={Delhi} alt={Delhi} />
    </div>
    <div className="city__name">New Delhi</div>
</div>

<div className="city__box">
    <div className="city__image">
      <img src={Pune} alt={Hydrabad} />
    </div>
    <div className="city__name">Pune</div>
</div>

<div className="city__box">
    <div className="city__image">
      <img src={Bangalore} alt={Bangalore} />
    </div>
    <div className="city__name">Bangalore</div>
</div>

<div className="city__box">
    <div className="city__image">
      <img src={Kolkata} alt={Kolkata} />
    </div>
    <div className="city__name">kolkata</div>
</div>
 
<div className="city__box">
    <div className="city__image">
      <img src={Mumbai} alt={Mumbai} />
    </div>
    <div className="city__name">Mumbai</div>
</div>

<div className="city__box">
    <div className="city__image">
      <img src={Chennai} alt={Chennai} />
    </div>
    <div className="city__name">Chennai</div>
</div>

<div className="city__box">
    <div className="city__image">
      <img src={Ahmedabad} alt={Ahmedabad} />
    </div>
    <div className="city__name">Ahmedabad</div>
</div>
 
<div className="city__box">
    <div className="city__image">
      <img src={Bhopal} alt={Bhopal} />
    </div>
    <div className="city__name">Bhopal</div>
</div>
 
          </div>

          <div className="gg">

<div className="city__box">
    <div className="city__image">
      <img src={Hydrabad} alt={Hydrabad} />
    </div>
    <div className="city__name">Hydrabad</div>
</div>

<div className="city__box">
    <div className="city__image">
      <img src={Delhi} alt={Delhi} />
    </div>
    <div className="city__name">New Delhi</div>
</div>

<div className="city__box">
    <div className="city__image">
      <img src={Pune} alt={Hydrabad} />
    </div>
    <div className="city__name">Pune</div>
</div>

<div className="city__box">
    <div className="city__image">
      <img src={Bangalore} alt={Bangalore} />
    </div>
    <div className="city__name">Bangalore</div>
</div>

<div className="city__box">
    <div className="city__image">
      <img src={Kolkata} alt={Kolkata} />
    </div>
    <div className="city__name">kolkata</div>
</div>
 
<div className="city__box">
    <div className="city__image">
      <img src={Mumbai} alt={Mumbai} />
    </div>
    <div className="city__name">Mumbai</div>
</div>

<div className="city__box">
    <div className="city__image">
      <img src={Chennai} alt={Chennai} />
    </div>
    <div className="city__name">Chennai</div>
</div>

<div className="city__box">
    <div className="city__image">
      <img src={Ahmedabad} alt={Ahmedabad} />
    </div>
    <div className="city__name">Ahmedabad</div>
</div>
 
<div className="city__box">
    <div className="city__image">
      <img src={Bhopal} alt={Bhopal} />
    </div>
    <div className="city__name">Bhopal</div>
</div>
 
          </div>
        </Carousel>

        </div>

      </div>
      
      </div>
    </div>
  );
};

export default CityProp;


