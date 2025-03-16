import React from "react";
import "./TravelCard.css";
import TravelLibraries from "./TravelLibraries.js";
import Travel_img from "../../assets/Travel_Labraries/Travel_img.png";
import girlCamera from "../../assets/Travel_Labraries/girlCamera.jpeg";
import BoyCamera from "../../assets/Travel_Labraries/BoyCamera.jpeg";


const TravelCard = () => {
  return (
    <div className="travel-container">
      <div className="latest-container">
        <h3>Latest Travel Libraries</h3>
        <div className="travel-card">

          <TravelLibraries
            imgbox={Travel_img}
            date="Nov 15, 2024"
            time="10 min read"
            head="The Art of Budget Travel: Maximizing Adventure on a Shoestring"
            description="Explore strategies to travel the world without breaking the bank.
            Learn about affordable destinations, smart saving tips, and hacks
            for securing cheap flights and accommodations while still enjoying an Adventure experience."
          />

          <TravelLibraries
            imgbox={girlCamera}
            date="Dec 20, 2024"
            time="10 min read"
            head="Top Adventure Destinations for Adrenaline Junkies"
            description="Discover must-visit spots for adventure lovers, from skydiving in New Zealand to scuba diving in Indonesia. Get insider tips on planning these high-energy trips while staying within your travel budget."
          />

          <TravelLibraries
            imgbox={BoyCamera}
            date="Jan 13, 2025"
            time="10 min read"
            head="How to Save, Invest, and Travel Debt-Free"
            description="Find out how to balance travel and finances by planning smartly. Learn how saving and investing for travel can help you explore the world while avoiding debt and creating lifelong memories."
          />

        </div>
      </div>
    </div>
  );
};

export default TravelCard;
