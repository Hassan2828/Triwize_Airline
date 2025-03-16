import React from 'react';
import './OfferCard.css';
import card1 from '../../assets/offercard_img/cart1.png';
import card2 from '../../assets/offercard_img/card2.png';
import card3 from '../../assets/offercard_img/card3.png';
import BadgeRed from '../../assets/offercard_img/BadgeRed.png';

const OfferCard = () => {
  return (
    <div className='empty'>
    <div className='Offer-container'>
      <div className='card-container'>
         <h2>Deals to look out for</h2>
    <div className='offercard-container'>
        <div className="offer-card">
          <img src={BadgeRed} alt="" />
        </div>   
       <div className="offer-card-2">
        <div className="offer-content">
          <div className="content-head">
            Weekend <br /> Deal
          </div>
          <div className='off'>
       <p>20% OFF</p>
          </div>
            <p className='first-booking'>on your first booking.*</p>
            <button className='btn-learn'>LEARN MORE</button>
        </div>
        </div> 


        <div className="offer-card-3">
          <div className="offer-content">
            <div className="content-head-3">
              Deals With <br /><span className='span-head'>LOWEST FARES</span>
            </div>
            <div className="onwards">
              <p>$200 onwards</p>
            </div>
            <p className='cardpara-3'>on the international flights.*</p>
            <button className='btn-learn'>LEARN MORE</button>
          </div>
        </div>    
    </div>
    </div>
    </div>       
    </div>

  )
}

export default OfferCard