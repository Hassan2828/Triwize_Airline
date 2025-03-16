import React,{useState} from 'react';
import './Deals.css';

const Deals = () => {
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

return (
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
   )
}
export default Deals




