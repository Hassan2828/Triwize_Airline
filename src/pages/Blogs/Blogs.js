import React from 'react';
import './Blogs.css';
import BannerTop from '../../assets/BlogBanner/BlogBannerTop.png';
import { CiSearch } from "react-icons/ci";
import Travel_img from "../../assets/Travel_Labraries/Travel_img.png";
import { NavLink, Route, Routes } from 'react-router-dom';
import HelpCard from '../../components/Help/HelpCard';
import CityProp from '../../components/CityULove/CityProp';
import BeforeFooter from '../../components/BeforeFooter/BeforeFooter';
import Next_Adventure from '../../assets/BlogBanner/Next_Adventure.png';
import ShareDetails from '../../components/ShareDetails/ShareDetails';
import Tabs from '../../components/Tabs/Tabs';

const Blogs = (props) => {
  return (
    <>

    <div className='blog-banner'>
     <img src={BannerTop} alt="" />
     <div className='search-inner'>
     <CiSearch />
     <input type="text" placeholder='Search our blogs by topic or keywords' />
     </div>
    </div>

    <div className='all-container'>
    <Tabs />
    </div>

    <div className="travel-card">
      <div className='blog-images'>
        <img src={Travel_img} alt="" />
      </div>

      <div className='travel-content'>
        <div className='dating-timing'>
          <p>Nov 15,2025</p>
          <p>10 min read</p>
        </div>

        <div className='heading-contents'>
            <div className='blog-heading-top'>The Art of Budget Travel: Maximizing Adventure on a Shoestring</div>
            <p className='blog-paragraph'>Explore strategies to travel the world without breaking the bank. Learn about affordable destinations, smart saving tips, and hacks for securing cheap flights and accommodations while still enjoying an adventurous experience.</p>
        </div>
      </div>
    </div>

        <div className='Next-Adventures'>
        <img src={Next_Adventure} alt="" />
        </div>

    <HelpCard />
    <CityProp />
    <ShareDetails />
    <BeforeFooter />

      
    </>
  )
}

export default Blogs
