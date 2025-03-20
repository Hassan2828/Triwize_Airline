import React from 'react'
import Benefits from './Benefits'
import './BenefitsProp.css'
import Headset from '../../assets/Benifits/Headset.png'

const BenefitsProp = () => {
  return (
    <>
     <div className='Benefits-container'>
        <div className="Benefits-get">
            <div className="Benefits-contents">
            <h2 className='roboto-800'>Benefits You Will Get</h2>
              <div className="big-content">
                <div className="small-content">
    
    <Benefits  Headset={Headset} heading='24/7 Customer Support' describe='Our dedicated customer support team is available 24/7 to assist with bookings, answer your queries, and ensure a hassle-free travel experience.' />

    <div className='border__benefits'>
    <Benefits  Headset={Headset} heading='Transparent Pricing' describe='Our platform provides clear pricing for all bookings. For even better deals and additional savings, our customer representatives are ready to help.' />
    </div>
    
    <Benefits  Headset={Headset} heading='Unlock Exclusive Deals' describe='Contact our travel experts to access unbeatable flight deals tailored to your preferences, so you can save more on every trip.' />

                </div>
              </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default BenefitsProp