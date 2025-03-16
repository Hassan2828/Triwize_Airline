import React from 'react'; 
import './FooterBottom.css';
import PaymentSection from '../../assets/footer_img/PaymentSection.png';
import Marquee from 'react-fast-marquee';

const FooterBottom = () => {
 return (
  <footer className="footer">
   <div className="footer-section">
    <h3>Contact Us</h3>
    <p>Address:Jawahar nagar  Jamshedpur</p>
    <p>Email: professora498@gmail.com</p>
    <p>Phone: +91 9142015149</p>
   </div>
   <div className="footer-section">
    <h3>Quick Links</h3>
    <ul>
     <li><a href="#">Home</a></li>
     <li><a href="#">Disclaimer</a></li>
     <li><a href="#">Privacy Policy</a></li>
     <li><a href="#">Cookie Policy</a></li>
     <li><a href="#">Terms & Conditions</a></li>
     <li><a href="#">Refund & Chargeback Policy</a></li>
    </ul>
   </div>
   <div className="footer-section">
    <h3>Help</h3>
    <ul>
     <li><a href="#">Chat</a></li>
     <li><a href="#">Disclaimer</a></li>
     <li><a href="#">Contact Us</a></li>
     <li><a href="#">Triwize Coins</a></li>
     <li><a href="#">Invest</a></li>
    </ul>
   </div>
      
   <div className="payment-section">
    <Marquee >
    <img src={PaymentSection} alt="" />
    </Marquee>
   </div>
   <div className="Disclaimer">
    <h2>Disclaimer</h2>
   </div>
   <div className="Lowest-Guarantee">
   This information provides some of best air fares for flights from USA  which are subject to availability of seats for a specified date.

SPL Fare** All Fares are subject to Availability, Fares are Special Call only Fares may change at the time of Booking, Fares Shown are Base.* All above Fares are in USD (United States Dollar)
    *Lowest Fare Guarantee - We are so sure that our bulk private fares are unbeatable that we will give you a Low Fare Guarantee! As long as you call us within 24 hours from the purchase of your ticket and you provide us with a copy of the itinerary from any of our competitors which will include identical itinerary, including the fare basis and fare calculation information, we will match the price and send you $50 voucher to use towards your next purchase of any bulk private fares.All the advertised promos on top page 'Banners' are subject to individual rules. Please, click on each banner to learn all the advertised promo details. Savings of up to 50% off are indicated off the full un-restricted (i.e. refundable) published “Y” class airfares of major scheduled airlines. Savings may vary based on availability, advance purchase, minimum stay, travel dates, and blackout dates and may change without notice. To claim “Advertised Fare” and “Lowest Fare Guarantee” please, first, talk to your travel agent or email us at info@triwize.com or call us at xxx-xxx-xxxx. For more details check the website 'Rules & Conditions'.*Click below links to check individual fare rules for each city: To India & ISC : Delhi, Mumbai, Hyderabad, Ahmedabad, Bangalore, Chennai, Pune To North America : Las Vegas, Miami, Orlando, New York, Los Angeles, Dallas, Atlanta, Houston, Chicago, Phoenix, Washington, Fort Lauderdale Advertised Fare Guarantee: All the fares advertised on this website are guaranteed to be reasonably available within the specified travel period in the fare restrictions. If the fare is not available, ASAP Tickets will honor the advertised fare and sell the fare at the advertised level. To claim “Advertised Fare” and “Lowest Fare Guarantee” please, first, talk to your travel agent or email us at info@asaptickets.com or call us at 888-531-0722. For more details check the website 'Rules & Conditions'. ◊ Membership program is a subscription-based service known as “Dreampass Plus” offered to ASAP Tickets clients. The product is offered in 3 payment plans with automatic renewal: 3, 6 and 12 months ($10.83 is a price per month choosing a 12-months plan). Cashback Program offers generous cashback in the form of Dreamcoins, up to 10% for every trip. International Emergency Medical Protection is a comprehensive medical coverage up to $500,000 for you and your family while traveling internationally. Global eSIM is a complimentary eSIM, featuring free internet access of 3GB, valid for 30 days in 140+ countries for each trip purchased with ASAP Tickets. $100 Additional Credit is credit towards future ancillary purchases (like Travel Care Service and Lost Baggage Protection), which is available only for a 12-month membership. The $30 off Flight Voucher entitles the customer to a discount of $30 on air ticket purchases made with ASAP Tickets. The discount is applied when making a booking by calling ASAP Tickets. To redeem the voucher code [ASAP30], the customer is required to provide it to the Travel Agent before the booking is made. ASAP Tickets reserves the right to modify or terminate this promotion at any time without prior notice. The voucher is non-combinable with any other vouchers, the discount codes or other types of discounts. Other terms and conditions may apply.
   </div>
  </footer>
 );
};

export default FooterBottom;
