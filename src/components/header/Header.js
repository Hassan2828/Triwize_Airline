import React, { useEffect, useState } from 'react';
import './Header.css';
import Triwize from '../../assets/header_img/TRIWI.png';
import Group24 from '../../assets/header_img/Group 24.png';
import Z from '../../assets/header_img/Z.png';
import E from '../../assets/header_img/E.png';
import { FaPhoneAlt } from "react-icons/fa";
import currancylogo from '../../assets/header_img/currancylogo.png';
import indiaflag from '../../assets/header_img/indiaflag.png';
import { NavLink } from 'react-router-dom';

    const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleOpen = () => {
          setIsOpen(!isOpen);
    };
    
    const routes = [
          "San Francisco to New Delhi",
          "San Francisco to Mumbai",
          "San Francisco to Bangalore",
          "New York to New Delhi",
          "New York to Mumbai",
          "Washington, D.C. to New Delhi",
          "Newark to Mumbai",
          "Dallas to New Delhi",
          "Seattle to Bengaluru",
          "Boston to Mumbai",
          "New York to Chennai",
          "Chicago to New Delhi",
          "Chicago to Hyderabad",
          "Los Angeles to New Delhi",
          "Los Angeles to Mumbai",
    ];


    const [showDealsDropdown, setShowDealsDropdown] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        if (link === 'deals') {
            setShowDealsDropdown(true);
        } else {
            setShowDealsDropdown(false);
        }
    };

    return (
        <>
            <div className='Triwize-header'>
                <div className="frame">
                    <div className="Triwize-logo">
                        <a href="/">
                            <img src={Triwize} alt="" />
                            <img src={Group24} alt="" />
                            <img src={Z} alt="" />
                            <img src={E} alt="" />
                        </a>
                    </div>
                    <div className="nav">
                        <ul>
                            <NavLink to='/' activeLink style={{ textDecoration: 'none' }} onClick={() => handleLinkClick('home')}>
                                <li>Flights</li>
                            </NavLink>
                            <NavLink  style={{ textDecoration: 'none' }}>
                                <li onClick={toggleOpen}>Deals</li>
                            </NavLink>
                            <NavLink to='blogs' style={{ textDecoration: 'none' }} onClick={() => handleLinkClick('blogs')}>
                                <li>Blogs</li>
                            </NavLink>
                            <NavLink to='contacts' style={{ textDecoration: 'none' }} onClick={() => handleLinkClick('contacts')}>
                                <li>Contact Us</li>
                            </NavLink>
                        </ul>
                    </div>

                    <div className="Triwize-caller">
                        <div className="Triwize-call">
                         <a href="tel:1234-5678-9012" style={{ textDecoration: 'none' }}  >
                            <div className='phone'>
                                <FaPhoneAlt width={24} height={24} />
                            </div>
                            <div className="Triwize-para">
                                <p>Book Now - Call us 24/7 <span className='emergencry'>01-234-567-89-01</span></p>
                            </div>
                            </a>
                        </div>

                        <div className="currancy">
                            <div class="dropdown">
                                <button class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span><img src={currancylogo} className='currancy-image' alt="" /></span>
                                    USD
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><span><img src={currancylogo} className='currancy-image' alt="" /></span><a class="dropdown-item" href="#">USD</a></li><li>
                                        <span><img src={indiaflag} width={32} height={30} top={5.78} left={5.69} className='currancy-image' alt="" /></span>
                                        <a class="dropdown-item" href="#">IND</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="deals-dropdown">
    {isOpen && (
        <div className="dropdown-content">
            {routes.map((route, index) => (
                <a href="#" key={index}>
                    {route}
                </a>
            ))}
        </div>
       )}
            </div>
        </>
    );
};
export default Header;
