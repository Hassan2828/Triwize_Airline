import React, { useState } from 'react';
import './Tabs.css';
import TravelCard from '../TravelLibraries/TravelCard';

const Tabs = () => {
const [toggle, setToggle] = useState();

    function updateToggle(id){
    setToggle(id);
    }

  return (
    <div className='tab-container'>
      <div className="tab-content-container">
        <div className='tab-heading'>
            <ul>
                <li onClick={() => updateToggle(1)}>All</li>
                <li onClick={() => updateToggle(2)}>Adventure</li>
                <li onClick={() => updateToggle(3)}>Travel</li>
                <li onClick={() => updateToggle(4)}>Budget</li>
                <li onClick={() => updateToggle(5)}>Trending</li>
            </ul>
        </div>

    <div className={toggle === 1 ? "show-content" : "content"}>
     <TravelCard />
    </div>             
      
    <div className={toggle === 2 ? "show-content" : "content"}>
     <h1>Adventure</h1>
    </div>

    <div className={toggle === 3 ? "show-content" : "content"}>
     <h1>Travel</h1>
    </div>             
      
    <div className={toggle === 4 ? "show-content" : "content"}>
     <h1>Budget</h1>
    </div>

    <div className={toggle === 5 ? "show-content" : "content"}>
     <h1>Trending</h1>
    </div>             
      
    </div>
    </div>
  )
}

export default Tabs