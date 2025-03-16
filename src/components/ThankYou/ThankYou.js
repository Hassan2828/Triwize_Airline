import React from 'react';
import './ThankYou.css';
import MyDream from '../../assets/ThankYou/MyDream.png';

const ThankYou = () => {
  return (
    <>
    <div className='Thank-you'>
        <div className="thank-you-container">
            <div className="thank-sub-container">
                <img src={MyDream} alt="" />
                <div className='Thanking-you'>
                    <h2>Thank You</h2>
                    <p>Your submission has been received.We will be in touch and contact you soon!</p>
                </div>
            </div>
            <button className='Back-to-site'>
                Back To Site
            </button>
        </div>
    </div>
    </>
  )
}

export default ThankYou