import React from 'react';
import './HowWork.css';

const HowWork = (props) => {
  return (
    <>
    
            {/* <div className='work-section1'> */}
                <div className="work-number">
                    <p>{props.index}</p>
                </div>
                <div className="search-location">
                    <h3>{props.heading}</h3>
                    <p>{props.paragraph}
                    </p>
                </div>
            {/* </div> */}
    </>
  )
}

export default HowWork