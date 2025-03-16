import React, { useState, useEffect } from 'react';
import './RoundTrip.css';
import axios from 'axios';

        const RoundTrip = () => {  
        const [apiAirportList, setApiAirportList] = useState([]);

        let airportMainData = ['Search on Typing'];
        // const [airportList, setAirportList] = useState(airportMainData);


        const [fromTypedInput, setFromTypedInput] = useState("");
        const [showDropdown, setShowDropdown] = useState(false);

        const [numTravelers, setNumTravelers] = useState(1);
        const [showTravelers, setShowTravelers] = useState(false);
        const [adults, setAdults] = useState(1);
        const [seniors, setSeniors] = useState(0);
        const [children, setChildren] = useState(0);
        const [infants, setInfants] = useState(0);


        const token = "DmpCNyPbTu4y7yEixdyHOf5MW0Af";

         // Replace with your token

    // const fetchAirportData = async (keyword) => {
    // const url = `https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=${keyword}&page[limit]=10&page[offset]=0&sort=analytics.travelers.score&view=FULL`;

    const url = `https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=${keyword}&page[limit]=10&page[offset]=0&sort=analytics.travelers.score&view=FULL`;

    

        
    //     try {
    //         const response = await fetch(url, {
    //             method: "GET",
    //             headers: {
    //                 Authorization: `Bearer ${accessToken}`,
    //             },
    //         });
    //         const data = await response.json();
    //         const locations = data.data.map((item) => item.name); 
    //         console.log(locations)

    //         setApiAirportList(
    //             response.data.data.map((item) => {
    //               let obj = {
    //                 value: item.iataCode.toLowerCase(),
    //                 label:
    //                   item.name.toLowerCase() +
    //                   " (" +
    //                   item.iataCode.toLowerCase() +
    //                   ")",
    //               };
    //               return obj;
    //             })
    //     } catch (error) {
    //         console.error("Error fetching airport data:", error);
    //     }
    // };

    const fetchAirportData = async (input) => {
        if (input.length < 2) return;

        try {
          const response = await axios.get(
            "https://test.api.amadeus.com/v1/reference-data/locations",
            {
              params: {
                subType: "AIRPORT,CITY",
                keyword: input,
                "page[limit]": 10,
                "page[offset]": 0,
                sort: "analytics.travelers.score",
                view: "FULL",
              },
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
   
          if (response.data.meta.count > 0) {
          setApiAirportList(
              response.data.data.map((item) => {
                let obj = {
                  value: item.iataCode.toLowerCase(),
                  label:
                    item.name.toLowerCase() +
                    " (" +
                    item.iataCode.toLowerCase() +
                    ")",
                };
                return obj;
              })
            );
          } else {
            setApiAirportList([{ value: "", label: "No Data..." }]);
          }
        } catch (error) {
          console.error("Error fetching airport data:", error);
          setApiAirportList([{ value: "", label: "No Data..." }]);
        }
      };



    
      useEffect(() =>{
       console.log(apiAirportList);
     },[apiAirportList])
 

    // const handleFilter = (value) =>{
    //     const res = filterData.filter(f => f.name.toLowerCase().includes(value))
    //     setData(res);
    //     if(value === ""){
    //         setData([])
    //     }
    // }
    

    useEffect(() => {
        setNumTravelers(adults + seniors + children + infants);
    }, [adults, seniors, children, infants]);


    const increment = (type) => {
        switch (type) {
            case 'adult':
                setAdults(adults + 1);
                break;
            case 'senior':
                setSeniors(seniors + 1);
                break;
            case 'child':
                setChildren(children + 1);
                break;
            case 'infant':
                setInfants(infants + 1);
                break;
            default:
                break;
        }
    };



    const decrement = (type) => {
        switch (type) {
            case 'adult':
                if (adults > 1) setAdults(adults - 1);
                break;
            case 'senior':
                if (seniors > 0) setSeniors(seniors - 1);
                break;
            case 'child':
                if (children > 0) setChildren(children - 1);
                break;
            case 'infant':
                if (infants > 0) setInfants(infants - 1);
                break;
            default:
                break;
        }
    };



    // const handleFilterDropdown = () => {
    //     return airportMainData.filter((airport) =>
    //         airport.toLowerCase().includes(fromTypedInput.toLowerCase())
    //     );
    // };
    

    // useEffect(() => {
    //     const newList = handleFilterDropdown();
    //     if (fromTypedInput !== "") {
    //         setApiAirportList(newList);
    //     } else {
    //         setApiAirportList(airportMainData);
    //     }
    // }, [fromTypedInput]);


    const handleSelect = (item) => {
        setFromTypedInput({value : item.value ,label : item.label});
        setShowDropdown(false);
    };


    

    // const handleInputChange = (e) => {
    //     setFromTypedInput(e.target.value);
    //     setShowDropdown(true);
    // };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setFromTypedInput(inputValue);
        setShowDropdown(true);
    
        if (inputValue.length > 2) { 
            fetchAirportData(inputValue);
        } else {
            setApiAirportList([]); 
        }
    };   

    const handleInputFocus = () => {
        setShowDropdown(true);
    };

    const handleTravelersInputFocus = () => {
        setShowTravelers(true);
    };

    const handleDoneClick = () => {
        setShowTravelers(false);
    };
    
    return (
        <div className='search__container'>
            <div className='round__one_'>
          
            </div>
            <div className='search__sub_container'>
                {/* 1 */}

        <div className='___inputs__froms'>
            <input
            className='input__boxs'
            type="text"
            placeholder='From where'
            // value={fromTypedInput?.value}
            value={fromTypeInput?.value}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            />
                
        {showDropdown && (
        <section className="dropdown_list">
        {apiAirportList.map((item, i) => (
        <p key={i} onClick={() => handleSelect(item)}>{item}</p>
        ))}
       </section>
           )}

        </div>

                {/* 2nd */}

                <div className="input__froms">
                    <input type="text" placeholder='To Where' />
                </div>


                {/* 3rd */}

                <div className="input__date">
                    <input type="date" placeholder='Depart - Return' />
                </div>

                {/* 4th */}

                <div className="input__traveller">
                    <input
                        type="text"
                        placeholder='Adult'
                        value={`${numTravelers} Traveler(s)`}
                        onFocus={handleTravelersInputFocus}
                        readOnly
                    />
                </div>

                {/* 5th */}
                <div className="search__btns">
                    <button>Search</button>
                </div>
            </div>

            {showTravelers && (
                <div className="travelers-container">
                    <div className="traveler-row">
                        <label>Adults:</label>
                        <div className="traveler-controls">
                            <button onClick={() => decrement('adult')}>-</button>
                            <span>{adults}</span>
                            <button onClick={() => increment('adult')}>+</button>
                        </div>
                    </div>
                    <div className="traveler-row">
                        <label>Seniors:</label>
                        <div className="traveler-controls">
                            <button onClick={() => decrement('senior')}>-</button>
                            <span>{seniors}</span>
                            <button onClick={() => increment('senior')}>+</button>
                        </div>
                    </div>
                    <div className="traveler-row">
                        <label>Children:</label>
                        <div className="traveler-controls">
                            <button onClick={() => decrement('child')}>-</button>
                            <span>{children}</span>
                            <button onClick={() => increment('child')}>+</button>
                        </div>
                    </div>
                    <div className="traveler-row">
                        <label>Infants:</label>
                        <div className="traveler-controls">
                            <button onClick={() => decrement('infant')}>-</button>
                            <span>{infants}</span>
                            <button onClick={() => increment('infant')}>+</button>
                        </div>
                    </div>
                    <button className='Done-btn' onClick={handleDoneClick}>Done</button>
                </div>
            )}
        </div>
    );
    };

    export default RoundTrip
