import React from 'react';
import './BeforeFooter.css';

const BeforeFooter = () => {
  const destinations = [
    {
      title: 'Destination Deals',
      links: [
        { text: 'Flights under $200', url: '/flights-under-200' },
        { text: 'Last minute travel deals', url: '/last-minute-deals' },
        { text: 'All our destinations', url: '/all-destinations' },
      ],
    },
    {
      title: 'Cheap International Flights from Popular US Cities to India (IN)',
      links: [
        { text: 'Cheap flights from Newark to India', url: '/newark-to-india' },
        { text: 'Cheap flights from Detroit to India', url: '/detroit-to-india' },
        { text: 'Cheap flights from Houston to India', url: '/houston-to-india' },
        { text: 'Cheap flights from Chicago to India', url: '/chicago-to-india' },
        { text: 'Cheap flights from Seattle-Tacoma to India', url: '/seattle-to-india' },
        { text: 'Cheap flights from Los Angeles to India', url: '/los-angeles-to-india' },
        { text: 'Cheap flights from Washington to India', url: '/washington-to-india' },
        { text: 'Cheap flights from Atlanta to India', url: '/atlanta-to-india' },
      ],
    },
    {
      title: 'Top International City Pairs',
      links: [
        { text: 'Cheap flights from San Francisco to New Delhi', url: '/san-francisco-to-new-delhi' },
        { text: 'Cheap flights from Newark to Ahmedabad', url: '/newark-to-ahmedabad' },
        { text: 'Cheap flights from Chicago to Hyderabad', url: '/chicago-to-hyderabad' },
        { text: 'Cheap flights from San Francisco to Mumbai', url: '/san-francisco-to-mumbai' },
        { text: 'Cheap flights from San Francisco to Hyderabad', url: '/san-francisco-to-hyderabad' },
        { text: 'Cheap flights from Newark to Mumbai', url: '/newark-to-mumbai' },
        { text: 'Cheap flights from Washington to Hyderabad', url: '/washington-to-hyderabad' },
        { text: 'Cheap flights from Dallas to Hyderabad', url: '/dallas-to-hyderabad' },
        { text: 'Cheap flights from New York to Hyderabad', url: '/new-york-to-hyderabad' },
        { text: 'Cheap flights from Newark to Hyderabad', url: '/newark-to-hyderabad' },
      ],
    },
    {
      title: 'Top Destinations',
      links: [
        { text: 'Cheap flights to New Delhi', url: '/flights-to-new-delhi' },
        { text: 'Cheap flights to Hyderabad', url: '/flights-to-hyderabad' },
        { text: 'Cheap flights to Mumbai', url: '/flights-to-mumbai' },
        { text: 'Cheap flights to Kolkata', url: '/flights-to-kolkata' },
        { text: 'Cheap flights to Chennai', url: '/flights-to-chennai' },
        { text: 'Cheap flights to Bengaluru', url: '/flights-to-bengaluru' },
        { text: 'Cheap flights to Ahmedabad', url: '/flights-to-ahmedabad' },
        { text: 'Cheap flights to Kochi', url: '/flights-to-kochi' },
        { text: 'Cheap flights to Thiruvananthapuram', url: '/flights-to-thiruvananthapuram' },
        { text: 'Cheap flights to Pune', url: '/flights-to-pune' },
      ],
    },
    {
      title: 'Best Last Minute Flights',
      links: [
        { text: 'Cheap last minute flights from San Francisco to New Delhi', url: '/last-minute-san-francisco-to-new-delhi' },
        { text: 'Cheap last minute flights from Newark to Ahmedabad', url: '/last-minute-newark-to-ahmedabad' },
        { text: 'Cheap last minute flights from Chicago to Hyderabad', url: '/last-minute-chicago-to-hyderabad' },
        { text: 'Cheap last minute flights from San Francisco to Mumbai', url: '/last-minute-san-francisco-to-mumbai' },
        { text: 'Cheap last minute flights from San Francisco to Hyderabad', url: '/last-minute-san-francisco-to-hyderabad' },
        { text: 'Cheap last minute flights from Newark to Mumbai', url: '/last-minute-newark-to-mumbai' },
        { text: 'Cheap last minute flights from Washington to Hyderabad', url: '/last-minute-washington-to-hyderabad' },
        { text: 'Cheap last minute flights from Dallas to Hyderabad', url: '/last-minute-dallas-to-hyderabad' },
        { text: 'Cheap last minute flights from New York to Hyderabad', url: '/last-minute-new-york-to-hyderabad' },
        { text: 'Cheap last minute flights from Newark to Hyderabad', url: '/last-minute-newark-to-hyderabad' },
      ],
    },
    {
      title: 'Top Destination Airports',
      links: [
        { text: 'Cheap flights to Rajiv Gandhi International Airport', url: '/flights-to-rajiv-gandhi-airport' },
        { text: 'Cheap flights to Chhatrapati Shivaji International Airport', url: '/flights-to-chhatrapati-shivaji-airport' },
        { text: 'Cheap flights to Indira Gandhi International Airport', url: '/flights-to-indira-gandhi-airport' },
        { text: 'Cheap flights to Chennai Airport', url: '/flights-to-chennai-airport' },
        { text: 'Cheap flights to Ahmedabad Airport', url: '/flights-to-ahmedabad-airport' },
        { text: 'Cheap flights to Bengaluru International Airport', url: '/flights-to-bengaluru-airport' },
        { text: 'Cheap flights to Cochin International Airport', url: '/flights-to-cochin-airport' },
        { text: 'Cheap flights to Netaji Subhas Chandra Bose Airport', url: '/flights-to-netaji-subhas-bose-airport' },
        { text: 'Cheap flights to Trivandrum International Airport', url: '/flights-to-trivandrum-airport' },
        { text: 'Cheap flights to Vadodara Airport', url: '/flights-to-vadodara-airport' },
      ],
    },
    {
      title: 'Top International Airlines',
      links: [
        { text: 'Cheap flights with United Airlines', url: '/flights-with-united-airlines' },
        { text: 'Cheap flights with Emirates', url: '/flights-with-emirates' },
        { text: 'Cheap flights with Etihad Airways', url: '/flights-with-etihad-airways' },
        { text: 'Cheap flights with Lufthansa', url: '/flights-with-lufthansa' },
        { text: 'Cheap flights with Delta Air Lines', url: '/flights-with-delta-airlines' },
        { text: 'Cheap flights with Air India', url: '/flights-with-air-india' },
        { text: 'Cheap flights with British Airways', url: '/flights-with-british-airways' },
        { text: 'Cheap flights with Qatar Airways', url: '/flights-with-qatar-airways' },
        { text: 'Cheap flights with Singapore Airlines', url: '/flights-with-singapore-airlines' },
        { text: 'Cheap flights with Cathay Pacific', url: '/flights-with-cathay-pacific' },
      ],
    },
    {
      title: 'Cheap Business Class Flights from Popular Cities, with Major Airlines and to Top Indian Destinations',
      links: [
        { text: 'Cheap Business class tickets from San Francisco to New Delhi', url: '/business-class-san-francisco-to-new-delhi' },
        { text: 'Cheap Business class tickets from Newark to Ahmedabad', url: '/business-class-newark-to-ahmedabad' },
        { text: 'Cheap Business class tickets from Chicago to Hyderabad', url: '/business-class-chicago-to-hyderabad' },
        { text: 'Cheap Business class tickets from San Francisco to Mumbai', url: '/business-class-san-francisco-to-mumbai' },
        { text: 'Cheap Business class tickets from San Francisco to Hyderabad', url: '/business-class-san-francisco-to-hyderabad' },
        { text: 'Cheap Business class tickets from Newark to Mumbai', url: '/business-class-newark-to-mumbai' },
        { text: 'Cheap Business class tickets from Washington to Hyderabad', url: '/business-class-washington-to-hyderabad' },
        { text: 'Cheap Business class tickets from Dallas to Hyderabad', url: '/business-class-dallas-to-hyderabad' },
        { text: 'Cheap Business class tickets from New York to Hyderabad', url: '/business-class-new-york-to-hyderabad' },
        { text: 'Cheap Business class tickets from Newark to Hyderabad', url: '/business-class-newark-to-hyderabad' },
        { text: 'Cheap Business class tickets with United Airlines', url: '/business-class-with-united-airlines' },
        { text: 'Cheap Business class tickets with Emirates', url: '/business-class-with-emirates' },
        { text: 'Cheap Business class tickets with Etihad Airways', url: '/business-class-with-etihad-airways' },
        { text: 'Cheap Business class tickets with Lufthansa', url: '/business-class-with-lufthansa' },
        { text: 'Cheap Business class tickets with Delta Air Lines', url: '/business-class-with-delta-airlines' },
        { text: 'Cheap Business class tickets with Air India', url: '/business-class-with-air-india' },
        { text: 'Cheap Business class tickets with British Airways', url: '/business-class-with-british-airways' },
        { text: 'Cheap Business class tickets with Qatar Airways', url: '/business-class-with-qatar-airways' },
        { text: 'Cheap Business class tickets with Singapore Airlines', url: '/business-class-with-singapore-airlines' },
        { text: 'Cheap Business class tickets with Cathay Pacific', url: '/business-class-with-cathay-pacific' },
      ],
    },
  ];

  return (
    <div className='BeforeContainer'>
      {destinations.map((destination, index) => (
        <div key={index} className="Destination">
          <h4>{destination.title}</h4>
          <p>
            {destination.links.map((link, linkIndex) => (
              <React.Fragment key={linkIndex}>
                <a href={link.url} target="_blank" className="link-text">{link.text}</a>
                {linkIndex < destination.links.length - 1 ? ', ' : ''}
              </React.Fragment>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BeforeFooter;
