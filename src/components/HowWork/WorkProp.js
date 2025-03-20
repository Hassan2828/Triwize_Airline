import React from 'react';
import './WorkProp.css';
import HowWork from './HowWork';

const WorkProp = () => {
  return (
    <>
    <div className='work-container'>
        <div className="work-content">
      <div className="work-heading">
      How It Works</div>
    <section className="search-destination">
            
    <HowWork index='01' heading='Search Your Destination'  paragraph='Enter your desired destination, travel
    dates, and preferences to explore a range
    of affordable flight options and deals tailored just for you.'/>
      <div className='border__both'>
      <HowWork index='02' heading='Fill out the Details'  paragraph='Fill out a simple form with your contact information and travel requirements. This helps us understand your needs and find the best deals available.'/>
      </div>

     <HowWork index='03' heading='Personalized Assistance'  paragraph='Our travel experts will contact you to guide you through the booking process, offering exclusive deals and ensuring you save more on your journey!'/>
    </section>
    </div>
</div>
    </>
  )
}

export default WorkProp