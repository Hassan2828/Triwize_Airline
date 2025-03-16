import React from 'react';
import './Flight.css';

import RoundTrip from "../../components/Round-Trip/RoundTrip.js";
import OfferCard from "../../components/OfferCard/OfferCard.js";
import Invest from "../../components/Invest/Invest.js";
import BeforeFooter from "../../components/BeforeFooter/BeforeFooter.js";
import FooterBanner from "../../components/FooterBanner/FooterBanner.js";
import PropSupport from '../../components/Support/PropSupport.js';
import TravelCard from "../../components/TravelLibraries/TravelCard.js";
import HelpCard from "../../components/Help/HelpCard.js";
import FlightCard from "../../components/InternationalFlight/FlightCard.js";
import CityProp from "../../components/CityULove/CityProp.js";
import BenefitsProp from "../../components/Benefits/BenefitsProp.js";
import WorkProp from "../../components/HowWork/WorkProp.js";
import ReviewProps from "../../components/Review/ReviewProps.js";
import BestDealProps from "../../components/BestDeal/BestDealProps.js";
import FooterBottom from "../../components/FooterBottom/FooterBottom.js";
import FlightProps from "../../components/FlightPage/FlightProps.js";
import EmiratesTicketProps from "../../components/EmiratesTicket/EmiratesTicketProps.js";
import Banner from "../../components/Banner/Banner.js";
import ShareDetails from '../../components/ShareDetails/ShareDetails.js';


const Flight = () => {
  return (
    <>
    <Banner />
    <RoundTrip />
    <OfferCard />
    <BestDealProps />
    <PropSupport />
    <ReviewProps />
    <FlightCard />
    <WorkProp />
    <Invest />
    <BenefitsProp />
    <TravelCard />
    <HelpCard />
    <CityProp />
    <ShareDetails />
    <BeforeFooter />
    <FooterBanner />
    <FooterBottom /> 
    <FlightProps />
    <EmiratesTicketProps />
    </>
  )
}

export default Flight