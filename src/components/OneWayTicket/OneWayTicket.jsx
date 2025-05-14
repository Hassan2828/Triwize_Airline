 import React, { useState } from 'react';
import './OneWayTicket.css';
import { FaBell } from "react-icons/fa";
import scrollImage from '../../assets/banner/scroll_Image.png';
import Help__hand from '../../assets/banner/Help__hand.png';
import Vector from "../../assets/bestDeals/Vector.png";
import planeflying from '../../assets/EmiratesTicket/Planeflying.png';
import EmiratesTicket from '../EmiratesTicket/EmiratesTicket';
import FlightPage from '../FlightPage/FlightPage';
import { IoChevronDown } from "react-icons/io5";
import Pagination from 'react-bootstrap/Pagination';

const OneWayTicket = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(false); // Clear error on change
    };

    return (
        <>
        <div className='one__way__ticket'>
        <div className="ticket__container">

    <div className="flight-banner-card">
    <div className="cheapest-fastest">
        <FlightPage best='Best' price='$900' time='9hr 50min'/>
    </div>
    <div className="cheapest-fastest">
        <FlightPage best='Cheapest' price='$900' time='9hr 50min'/>
    </div>
    <div className="cheapest-fastest">
        <FlightPage best='Fastest' price='$900' time='9hr 50min'/>
    </div>

    <div className="stop-button">
    <div className='never-giveup'>Stops</div>
    <IoChevronDown />
    </div>

  <div>
    </div>
    </div>
        <EmiratesTicket city='New York' jfk='JFK' time='10:55 AM' day='Friday,7 April 2025' timing='9hr 50min' Vector={Vector} stop='1 stop' del='DEL' dela='Delhi(DEL)' indera='Indira Gandhi International Airport' box='11:05 AM' boxing='Saturday, 8 April 2025' left='3 left at' dolar='$850' per='per traveller' sel='Select' planeflying={planeflying} />

        <EmiratesTicket city='New York' jfk='JFK' time='10:55 AM' day='Friday,7 April 2025' timing='9hr 50min' Vector={Vector} stop='1 stop' del='DEL' dela='Delhi(DEL)' indera='Indira Gandhi International Airport' box='11:05 AM' boxing='Saturday, 8 April 2025' left='3 left at' dolar='$850' per='per traveller' sel='Select' planeflying={planeflying} />

        <EmiratesTicket city='New York' jfk='JFK' time='10:55 AM' day='Friday,7 April 2025' timing='9hr 50min' Vector={Vector} stop='1 stop' del='DEL' dela='Delhi(DEL)' indera='Indira Gandhi International Airport' box='11:05 AM' boxing='Saturday, 8 April 2025' left='3 left at' dolar='$850' per='per traveller' sel='Select' planeflying={planeflying} />

        <EmiratesTicket city='New York' jfk='JFK' time='10:55 AM' day='Friday,7 April 2025' timing='9hr 50min' Vector={Vector} stop='1 stop' del='DEL' dela='Delhi(DEL)' indera='Indira Gandhi International Airport' box='11:05 AM' boxing='Saturday, 8 April 2025' left='3 left at' dolar='$850' per='per traveller' sel='Select' planeflying={planeflying} />

        <EmiratesTicket city='New York' jfk='JFK' time='10:55 AM' day='Friday,7 April 2025' timing='9hr 50min' Vector={Vector} stop='1 stop' del='DEL' dela='Delhi(DEL)' indera='Indira Gandhi International Airport' box='11:05 AM' boxing='Saturday, 8 April 2025' left='3 left at' dolar='$850' per='per traveller' sel='Select' planeflying={planeflying} />

        <div className='pagincation'>
        <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
            </div>
                    
            </div>                

            <div className="side__bar__container">
                    <div className="get__fire__alert">

                        <div className='bell__container'>
                            <section>
                                <FaBell />
                            </section>
                            <p>Get Fare ALerts</p>
                        </div>

                        <div className="Del__">
                            <p><span className='bold__'>Del</span>- New Delhi IGI to <span className='bold__'>NYC</span>
                                -New York All Airports</p>
                        </div>

                        <section className='input__email'>
                            <div className={`input-wrapper ${email ? 'shrink' : ''} eaddress ${emailError ? 'error' : ''}`}>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    onFocus={() => { }}
                                    onBlur={() => { }}
                                />
                                <label htmlFor="email">Email address *</label>
                            </div>
                        </section>

                        <div className='border__orange'>
                            <p>Get Fare Alerts</p>
                        </div>

                        <div className='sign_up'>
                            <p>By signing up, you accept our <span>
                                Terms and Conditions, Privacy Policy
                            </span> and to receive emails.</p>
                        </div>

                    </div>

                    <div className='scroll__image'>
                        <img src={scrollImage} alt="" />
                    </div>

                    <div className='help__card'>
                        <div className='image__cantainers'>
                            <img src={Help__hand} alt="" />
                        </div>

                        <div className='help__boxs'>
                            <h2>Let us help you book</h2>

                            <p>Personalized travel assistance by our live agents. Immediate booking confirmation.</p>

                            <button>
                                Contact Us
                            </button>

                        </div>
                    </div>
            </div>
            </div>
        </>
    )
}

export default OneWayTicket