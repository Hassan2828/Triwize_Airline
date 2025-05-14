import React from 'react';
import './ContactUs.css';
import Unlock from '../../components/Unlock/Unlock';
import ThankYou from '../../components/ThankYou/ThankYou';
import OneWayTicket from '../../components/OneWayTicket/OneWayTicket';

const ContactUs = () => {
  return (
    <>
    <div className='contact'>
       <Unlock />
       <ThankYou />
       <OneWayTicket />
     <h1>ContactUs pages</h1>
    </div>
    </>
  )
}

export default ContactUs