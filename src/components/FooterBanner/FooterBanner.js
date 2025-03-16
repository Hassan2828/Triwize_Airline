import React from 'react';
import './FooterBanner.css';
import Triwize from '../../assets/header_img/TRIWI.png';
import Group24 from '../../assets//header_img/Group 24.png';
import Z from '../../assets//header_img/Z.png';
import E from '../../assets/header_img/E.png';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const FooterBanner = () => {
  return (
    <div className='footer-banner'>
      <div className="footer-banner-content">
        <div className="Triwize-logo">
          <img src={Triwize} alt="" />
          <img src={Group24} alt="" />
          <img src={Z} alt="" />
          <img src={E} alt="" />
        </div>
        
        <div className="footer-middle">
          <h3>Are you looking for deals?</h3>
          <p>Subscribe and be the first to receive personalized offers in your inbox.</p>
          <div className="email-box">
            <div className="text">
              <input className='in' type="email" placeholder='Enter your email for the best deals' />
              <button className='subscribe-btn'>Subscribe</button>
            </div>
            <p>By subscribing, I agree to the Privacy Policy.</p>
          </div>
        </div>

        <div className="follower">
          <p>Follow us!</p>
          <div className="social-media-icon">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className='social-icon' width={30} height={30} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterCircle className='social-icon' width={30} height={30} />
            </a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
              <FaPinterest className='social-icon' width={30} height={30} />
            </a>
            <a href="https://music.youtube.com/" target="_blank" rel="noopener noreferrer">
              <SiYoutubemusic className='social-icon' width={30} height={30} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className='social-icon' width={30} height={30} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <TiSocialLinkedinCircular className='social-icon' width={100} height={100} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
