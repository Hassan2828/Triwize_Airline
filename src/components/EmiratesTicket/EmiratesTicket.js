import React from 'react';
import './EmiratesTicket.css';

const EmiratesTicket = (Props) => {
  return (
   <>
        <div className='emirates-card'>
        <div className="emirates-container">
    <div className="emirates-details">
       <div className="Emirates-logo">
         <img src={Props.planeflying} alt="" />
        </div>
            <div className="emirates-card-details">
                <div className="New-York">
                    <div className='emirate-box1'>
                    <div className='newyo'>{Props.city}</div>
                    <div className='jfk'>{Props.jfk}</div>
                    </div>
                    <div className='date-wise'>
                    <div className='time-wise'>{Props.time}</div>
                    <div className='day-wise'>{Props.day}</div>
                    </div>
                </div>

            <div className="destination-duration">
                <div className="destination-time">
                    <h6>{Props.timing}</h6>
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
                                <img src={Props.Vector} alt="" />
                            </div>
                        </div>

                        
                        <div className="stop">
                            <div className="NumberOfStop">
                                <span>{Props.stop}</span>
                            </div>
                            <div className="dela">
                                <span>{Props.del}</span>
                            </div>
                        </div>
                    </div>

            </div>
            <div className="Indra-Gandhi">
                <div className='Delhi'>
                    <div className='Delhi-del'>{Props.dela}</div>
                    <div className='ig'>{Props.indera}</div>
                </div>

                <div className='time-date-box'>
                    <div className="time-boxing">
                        {Props.box}
                    </div>
                    <div className='day-boxing'>
                       {Props.boxing}
                    </div>
                </div>

            </div>

        <div className="end-card">
            <div className="per-traveller">
                <div className='left'>{Props.left}</div>
                <div className='dollors'>{Props.dolar}</div>
                <div className='traveller'>{Props.per}</div>
            </div>
            <div className='selection'>
                {Props.sel}
            </div>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default EmiratesTicket