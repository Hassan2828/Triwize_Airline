import React from 'react'
import './RoundTrip.css';

const RoundTrip = (props) => {
  return (
   <>
   <div id='round__trip__container'>

      <div id="ticket-info-left">
                <div id="ticket-info-header">
                    <div id='plane-detail'>
                        <div id="plane-image">
                            <img src={props.AirIndia} alt="" />
                        </div>
                        <div id="plane-name">
                            {props.airIndia}
                        </div>
                    </div>
                    {/* <div id="plane-price">
                        <h4>{props.price}</h4>
                    </div> */}
    </div>

    <div id="destination-section">
        <div id="destination-details">
            <div id="destination-id">

                <div id='destination-name'>
                <p>{props.name}</p>
                </div>

                <div id="destination-date">
                <p>{props.date}</p>
                </div>

            </div>
                </div>

        <div id="destination-duration">
            <div id="destination-time">
                    <h6>{props.time}</h6>
                        </div>

                        <div id='air-way'>
                            <div id="air-box">
                                <div id="air-line">
                                    <div id="air-line1">
                                    </div>
                                    <div id="air-circle">
                                    </div>
                                    <div id="air-line2">
                                    </div>
                                </div>
                            </div>
                <div id="real-airplane">
                <img src={props.vectorimg} alt="" />
               </div>
            </div> 
                <div id="stop">
                    <div id="NumberOfStop">
                        <span>{props.stopped}</span>
                    </div>
                        <div id="dela">
                            <span>{props.delay}</span>
                        </div>
                        </div>
                    </div>

                    <div id="mco-flight">
                        <p>{props.mco}</p>
                    </div>
                    {/* <div id="book-btn">
                        <button>{props.btn}</button>
                    </div> */}
                </div>
      </div>

      <div id="ticket-info-left">
                <div id="ticket-info-header">
                    <div id='plane-detail'>
                        <div id="plane-image">
                            <img src={props.AirIndia} alt="" />
                        </div>
                        <div id="plane-name">
                            {props.airIndia}
                        </div>
                    </div>
                    <div id="plane-price">
                        <h4>{props.price}</h4>
                    </div>
    </div>

    <div id="destination-section">
        <div id="destination-details">
            <div id="destination-id">

                <div id='destination-name'>
                <p>{props.name}</p>
                </div>

                <div id="destination-date">
                <p>{props.date}</p>
                </div>

            </div>
                </div>

        <div id="destination-duration">
            <div id="destination-time">
                    <h6>{props.time}</h6>
                        </div>

                        <div id='air-way'>
                            <div id="air-box">
                                <div id="air-line">
                                    <div id="air-line1">
                                    </div>
                                    <div id="air-circle">
                                    </div>
                                    <div id="air-line2">
                                    </div>
                                </div>
                            </div>
                <div id="real-airplane">
                <img src={props.vectorimg} alt="" />
               </div>
            </div> 
                <div id="stop">
                    <div id="NumberOfStop">
                        <span>{props.stopped}</span>
                    </div>
                        <div id="dela">
                            <span>{props.delay}</span>
                        </div>
                        </div>
                    </div>

                    <div id="mco-flight">
                        <p>{props.mco}</p>
                    </div>
                    <div id="book-btn">
                        <button>{props.btn}</button>
                    </div>
                </div>
      </div>

   </div>

   </>
  )
}

export default RoundTrip