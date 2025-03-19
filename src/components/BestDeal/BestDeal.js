import React from 'react'
import './BestDeal.css';

const BestDeal = (props) => {
    return (
        <>
            <div className="ticket-info-left">
                <div className="ticket-info-header">
                    <div className='plane-detail'>
                        <div className="plane-image">
                            <img src={props.AirIndia} alt="" />
                        </div>
                        <div className="plane-name">
                            {props.airIndia}
                        </div>
                    </div>
                    <div className="plane-price">
                        <h4>{props.price}</h4>
                    </div>
                </div>

    <div className="destination-section">
        <div className="destination-details">
            <div className="destination-id">
                <div className='destination-name'>
                <p>{props.name}</p>
                    </div>
                <div className="destination-date">
                                <p>{props.date}</p>
                            </div>
                        </div>
                    </div>

        <div className="destination-duration">
            <div className="destination-time">
                    <h6>{props.time}</h6>
                        </div>

                        <div className='air-way'>
                            <div className="air-box">
                                <div className="air-line">
                                    <div className="air-line1">
                                    </div>
                                    <div className="air-circle">
                                    </div>
                                    <div className="air-line2">
                                    </div>
                                </div>
                            </div>
                <div className="real-airplane">
                <img src={props.vectorimg} alt="" />
               </div>
            </div>

                        
                        <div className="stop">
                            <div className="NumberOfStop">
                                <span>{props.stopped}</span>
                            </div>
                            <div className="dela">
                                <span>{props.delay}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mco-flight">
                        <p>{props.mco}</p>
                    </div>
                    <div className="book-btn">
                        <button>{props.btn}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestDeal