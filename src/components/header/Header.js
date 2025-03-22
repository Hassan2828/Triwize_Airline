import React, { useState } from 'react';
import './Header.css';
import Triwize from '../../assets/header_img/TRIWI.png';
import Group24 from '../../assets/header_img/Group 24.png';
import Z from '../../assets/header_img/Z.png';
import E from '../../assets/header_img/E.png';
import { FaPhoneAlt } from "react-icons/fa";
import currancylogo from '../../assets/header_img/currancylogo.png'; // USD image
import indiaflag from '../../assets/header_img/indiaflag.png'; // IND image
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState({
        label: 'USD',
        image: currancylogo, // Default image for USD
    });

    // Toggle the currency dropdown
    const toggleCurrencyDropdown = () => {
        setIsCurrencyOpen(!isCurrencyOpen);
    };

    // Handle selecting a currency and updating the label and image
    const handleCurrencySelect = (currency, image) => {
        setSelectedCurrency({ label: currency, image });
        setIsCurrencyOpen(false); // Close the dropdown
    };

    // Toggle Deals dropdown
    const toggleDealsDropdown = () => {
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
                        <ul className='roboto-700'>
                            <NavLink to='/' style={{ textDecoration: 'none' }}>
                                <li>Flights</li>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none' }} onClick={toggleDealsDropdown}>
                                <li>Deals</li>
                            </NavLink>
                            <NavLink to='blogs' style={{ textDecoration: 'none' }}>
                                <li>Blogs</li>
                            </NavLink>
                            <NavLink to='contacts' style={{ textDecoration: 'none' }}>
                                <li>Contact Us</li>
                            </NavLink>
                        </ul>
                    </div>

                    <div className="Triwize-caller">
                        <div className="Triwize-call">
                            <a href="tel:1234-5678-9012" style={{ textDecoration: 'none' }}>
                                <div className='phone'>
                                    <FaPhoneAlt width={24} height={24} />
                                </div>
                                <div className="Triwize-para">
                                    <p>Book Now - Call us 24/7 <span className='emergencry'>01-234-567-89-01</span></p>
                                </div>
                            </a>
                        </div>

                        {/* Currency Dropdown */}
                        <div className="currancy">
                            <div className="dropdown">
                                {/* Dropdown toggle button */}
                                <button className="dropdown-toggle" type="button" onClick={toggleCurrencyDropdown}>
                                    {/* Display selected currency's image and label */}
                                    <span><img src={selectedCurrency.image} className='currancy-image' alt={selectedCurrency.label} /></span> {selectedCurrency.label}
                                </button>

                                {/* Dropdown menu */}
                                {isCurrencyOpen && (
                                    <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton1">
                                        {/* USD Option */}
                                        <li onClick={() => handleCurrencySelect('USD', currancylogo)}>
                                            <span><img src={currancylogo} className='currancy-image' alt="USD" /></span>
                                            USD
                                        </li>

                                        {/* IND Option */}
                                        <li onClick={() => handleCurrencySelect('IND', indiaflag)}>
                                            <span><img src={indiaflag} width={32} height={30} alt="IND" /></span>
                                            IND
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Deals Dropdown */}
            {isOpen && (
                <div className="deals-dropdown">
                    <div className="dropdown-content">
                        {routes.map((route, index) => (
                            <a href="#" key={index}>
                                {route}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
