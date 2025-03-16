import React from 'react';
import './TravelLibraries.css';

const TravelLibraries = (props) => {
  return (
    <>
        <div className="travel-card-1">
            <div className="travel-images">
                 <img src={props.imgbox} alt="" />
            </div>
                <div className="travel-content">
                    <div className="date-time">
                        <p>{props.date}</p>
                        <p>{props.time}</p>
                    </div>
                    <div className="travel-heading">
                    <h3>{props.head}</h3>
                    <p>{props.description}</p>
                    </div>
                </div>
        </div>
    </>
  )
}

export default TravelLibraries