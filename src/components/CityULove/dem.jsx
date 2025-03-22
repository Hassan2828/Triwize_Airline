// // import React, { useState } from 'react';
// // import './CityProp.css';
// // import Hydrabad from "../../assets/CityULove/Hydrabad_img.png";
// // const CityProp = () => {
// //   const [togglecity, setTogglecity] = useState(1); 

//   const indianCity = [
//     { img: Hydrabad, city: "Hyderabad" },
//     { img: Delhi, city: "New Delhi" },
//     { img: Pune, city: "Pune" },
//     { img: Bangalore, city: "Bangalore" },
//     { img: Kolkata, city: "Kolkata" },
//     { img: Mumbai, city: "Mumbai" },
//     { img: Chennai, city: "Chennai" },
//     { img: Ahmedabad, city: "Ahmedabad" },
//     { img: Bhopal, city: "Bhopal" }
//   ];

//   const usaCity = [
//     { img: Hydrabad, city: "New York" },
//     { img: Delhi, city: "Washington" },
//     { img: Pune, city: "Ohio" },
//     { img: Bangalore, city: "Los Angeles" },
//     { img: Kolkata, city: "Chicago" },
//     { img: Mumbai, city: "San Francisco" },
//     { img: Chennai, city: "Miami" },
//     { img: Ahmedabad, city: "Boston" },
//     { img: Bhopal, city: "Seattle" }
//   ]

// //   const cities = togglecity === 1 ? indianCity : usaCity; // Dynamically select cities based on toggle state

// //   return (
// //     <div className='citylove-container'>
// //       <div className="cities__sub-container">
// //         <h2 className='cities_title'>Cities You Might Love</h2>

// //         <div className='india__usa'>

// //         <div className="love-one">
// //         <p onClick={() => setTogglecity(1)}>India</p>
// //         <p onClick={() => setTogglecity(2)}>USA</p>
// //         </div>

// //     <div className='main__city__container'>
// //         <div className="city__row">
// //           {cities.map((item, index) => (
// //               <div className="city__box">
// //                 <div className="city__image">
// //                   <img src={item.img} alt="" />
// //                 </div>
// //                 <div className="city__name">
// //                   {item.city}
// //                 </div>
// //               </div>
// //           ))}
// //         </div>
// //       </div>

// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
// // export default CityProp  


// import React, { useState, useRef, useEffect } from 'react';
// import './CityProp.css';
// import Hydrabad from "../../assets/CityULove/Hydrabad_img.png";
// import Delhi from "../../assets/CityULove/Delhi_img.png";
// import Pune from "../../assets/CityULove/Pune.png";
// import Bangalore from "../../assets/CityULove/Bangalore.jpeg";
// import Kolkata from "../../assets/CityULove/kolkata.jpeg";
// import Mumbai from "../../assets/CityULove/Mumbai.png";
// import Chennai from "../../assets/CityULove/Channai.png";
// import Ahmedabad from "../../assets/CityULove/Ahmendabad.png";
// import Bhopal from "../../assets/CityULove/Bhopal.png";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const CityProp = () => {
//     const [togglecity, setTogglecity] = useState(1);
//     const [isLeftChevronActive, setIsLeftChevronActive] = useState(false);
//     const [isRightChevronActive, setIsRightChevronActive] = useState(true);
//     const containerRef = useRef(null);

//     const indianCity = [
//         { img: Hydrabad, city: "Hyderabad" },
//         { img: Delhi, city: "New Delhi" },
//         { img: Pune, city: "Pune" },
//         { img: Bangalore, city: "Bangalore" },
//         { img: Kolkata, city: "Kolkata" },
//         { img: Mumbai, city: "Mumbai" },
//         { img: Chennai, city: "Chennai" },
//         { img: Ahmedabad, city: "Ahmedabad" },
//         { img: Bhopal, city: "Bhopal" },
//         { img: Hydrabad, city: "Hyderabad" },
//         { img: Delhi, city: "New Delhi" },
//         { img: Pune, city: "Pune" },
//         { img: Bangalore, city: "Bangalore" },
//         { img: Kolkata, city: "Kolkata" },
//         { img: Mumbai, city: "Mumbai" },
//         { img: Chennai, city: "Chennai" },
//         { img: Ahmedabad, city: "Ahmedabad" },
//         { img: Bhopal, city: "Bhopal" },
//     ];

//     const usaCity = [
//         { img: Hydrabad, city: "New York" },
//         { img: Delhi, city: "Washington" },
//         { img: Pune, city: "Ohio" },
//         { img: Bangalore, city: "Los Angeles" },
//         { img: Kolkata, city: "Chicago" },
//         { img: Mumbai, city: "San Francisco" },
//         { img: Chennai, city: "Miami" },
//         { img: Ahmedabad, city: "Boston" },
//         { img: Bhopal, city: "Seattle" },
//         { img: Hydrabad, city: "New York" },
//         { img: Delhi, city: "Washington" },
//         { img: Pune, city: "Ohio" },
//         { img: Bangalore, city: "Los Angeles" },
//         { img: Kolkata, city: "Chicago" },
//         { img: Mumbai, city: "San Francisco" },
//         { img: Chennai, city: "Miami" },
//         { img: Ahmedabad, city: "Boston" },
//         { img: Bhopal, city: "Seattle" },
//     ];

//     const cities = togglecity === 1 ? indianCity : usaCity;

//     const handleLeftChevronClick = () => {
//         if (containerRef.current) {
//             containerRef.current.scrollLeft -= 372;
//             setIsRightChevronActive(true);
//             setIsLeftChevronActive(containerRef.current.scrollLeft > 0);
//         }
//     };

//     const handleRightChevronClick = () => {
//         if (containerRef.current) {
//             containerRef.current.scrollLeft += 372;
//             setIsLeftChevronActive(true);
//             setIsRightChevronActive(containerRef.current.scrollLeft + containerRef.current.offsetWidth < containerRef.current.scrollWidth);
//         }
//     };

//     useEffect(() => {
//         const container = containerRef.current;

//         const checkScrollPosition = () => {
//             if (container) {
//                 const { scrollLeft, offsetWidth, scrollWidth } = container;
//                 setIsLeftChevronActive(scrollLeft > 0);
//                 setIsRightChevronActive(scrollLeft + offsetWidth < scrollWidth);
//             }
//         };

//         if (container) {
//             container.addEventListener('scroll', checkScrollPosition);
//             checkScrollPosition();

//             return () => {
//                 if (container) {
//                     container.removeEventListener('scroll', checkScrollPosition);
//                 }
//             };
//         }
//     }, [cities]);

//     return (
//         <div className="citylove-container">
//             <div className="cities__sub-container">
//                 <h2 className="cities_title">Cities You Might Love</h2>

//                 <div className="india__usa">
//                     <div className="love-one">
//                         <p
//                             onClick={() => setTogglecity(1)}
//                             className={togglecity === 1 ? "active-tab" : ""}
//                         >
//                             India
//                         </p>
//                         <p
//                             onClick={() => setTogglecity(2)}
//                             className={togglecity === 2 ? "active-tab" : ""}
//                         >
//                             USA
//                         </p>
//                     </div>

//                     {/* Chevron Buttons */}
//                     <div className="chevron-container">
//                         <button
//                             className={`chevron-button ${isLeftChevronActive ? 'active' : 'inactive'}`}
//                             onClick={handleLeftChevronClick}
//                             disabled={!isLeftChevronActive}
//                         >
//                             <IoIosArrowBack size={30} />
//                         </button>
//                         <button
//                             className={`chevron-button ${isRightChevronActive ? 'active' : 'inactive'}`}
//                             onClick={handleRightChevronClick}
//                             disabled={!isRightChevronActive}
//                         >
//                             <IoIosArrowForward size={30} />
//                         </button>
//                     </div>
//                 </div>

//                 {/* City Cards */}
//                 <div className="main__city__container">
//                     <div className="city__row" ref={containerRef}>
//                         {cities.map((item, index) => (
//                             <div key={index} className="city__box">
//                                 <div className="city__image">
//                                     <img src={item.img} alt={item.city} />
//                                 </div>
//                                 <div className="city__name">{item.city}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CityProp;
