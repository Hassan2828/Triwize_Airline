import React, { useState, useEffect } from "react";
import "./RoundTrip.css";
import axios from "axios";

const RoundTrip = () => {
  const [apiAirportList, setApiAirportList] = useState(["Search on Typing"]);
  const [apiAirportWhereList, setApiAirportWhereList] = useState(["Search on Typing"]);



  const [fromTypedInput, setFromTypedInput] = useState({value:"", label:""});
  const [whereTypedInput, setWhereTypedInput] = useState({value:"", label:""});
  const [showDropdown, setShowDropdown] = useState(false);

  const [numTravelers, setNumTravelers] = useState(1);
  const [showTravelers, setShowTravelers] = useState(false);
  const [adults, setAdults] = useState(1);
  const [seniors, setSeniors] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const token = "U4h5LGAoH7vN2RoVHJQlGvcIamu3";

  const fetchAirportData = async (input, isFrom = true) => {
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
        if(isFrom){
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
        }else{
            setApiAirportWhereList(
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
        }
      } else {
        setApiAirportList([{ value: "", label: "No Data..." }]);
      }
    } catch (error) {
      console.error("Error fetching airport data:", error);
      setApiAirportList([{ value: "", label: "No Data..." }]);
    }
  };

  useEffect(() => {
    console.log(apiAirportList);
  }, [apiAirportList]);

 

  useEffect(() => {
    setNumTravelers(adults + seniors + children + infants);
  }, [adults, seniors, children, infants]);

  const increment = (type) => {
    switch (type) {
      case "adult":
        setAdults(adults + 1);
        break;
      case "senior":
        setSeniors(seniors + 1);
        break;
      case "child":
        setChildren(children + 1);
        break;
      case "infant":
        setInfants(infants + 1);
        break;
      default:
        break;
    }
  };

  const decrement = (type) => {
    switch (type) {
      case "adult":
        if (adults > 1) setAdults(adults - 1);
        break;
      case "senior":
        if (seniors > 0) setSeniors(seniors - 1);
        break;
      case "child":
        if (children > 0) setChildren(children - 1);
        break;
      case "infant":
        if (infants > 0) setInfants(infants - 1);
        break;
      default:
        break;
    }
  };


  const handleSelect = (item, isFrom = true) => {
    if(isFrom){
        setFromTypedInput({ value: item.value, label: item.label });
    }else{
        setWhereTypedInput({ value: item.value, label: item.label });
    }
    setShowDropdown(false);
  };

  const handleInputChange = (e, isFrom = true) => {
    const inputValue = e.target.value;
    if(isFrom){
        setFromTypedInput({value:inputValue, label:inputValue});
    }else{
        setWhereTypedInput({value:inputValue, label:inputValue});
    }
    setShowDropdown(true);

    if (inputValue.length > 2) {
        if(isFrom){
            fetchAirportData(inputValue);
        }else{
            fetchAirportData(inputValue, false);
        }
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

  const [tripType, setTripType] = useState('round');

  return (
    <>
      <div className="search__container">
       <section style={{display:'flex', alignItems:'center'}}>
       <div onClick={()=>setTripType("round")} className="radio-btn"><Radio tripType={tripType} /><span>Round Trip</span></div>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <div onClick={()=>setTripType("one")} className="radio-btn"><Radio2 tripType={tripType}/><span>One Way</span></div>
       </section>
        <div className="round__one_"></div>
        <div className="search__sub_container">
          {/* 1 */}

          <div className="___inputs__froms">
            <input
              className="input__boxs"
              type="text"
              placeholder="From where"
              value={fromTypedInput.label}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />

            {showDropdown && (
              <section className="dropdown_list">
                {apiAirportList.map((item, i) => (
                  <p key={i} onClick={() => handleSelect(item)}>
                    {item.label}
                  </p>
                ))}
              </section>
            )}
          </div>

          {/* 2nd */}

          {/* <div className="input__froms">
          <input type="text" placeholder="To Where" />
        </div> */}
          <div className="___inputs__froms">
            <input
              className="input__boxs"
              type="text"
              placeholder="To Where"
              value={whereTypedInput.label}
              onChange={(e) => handleInputChange(e, false)}
              onFocus={handleInputFocus}
            />

            {showDropdown && (
              <section className="dropdown_list">
                {apiAirportWhereList.map((item, i) => (
                  <p key={i} onClick={() => handleSelect(item, false)}>
                    {item.label}
                  </p>
                ))}
              </section>
            )}
          </div>

          {/* 3rd */}

          <div className="input__date">
            <input type="date" placeholder="Depart - Return" />
          </div>

          {/* 4th */}

          <div className="input__traveller">
            <input
              type="text"
              placeholder="Adult"
              value={`${numTravelers} Traveler(s)`}
              onFocus={handleTravelersInputFocus}
              // readOnly
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
                <button onClick={() => decrement("adult")}>-</button>
                <span>{adults}</span>
                <button onClick={() => increment("adult")}>+</button>
              </div>
            </div>
            <div className="traveler-row">
              <label>Seniors:</label>
              <div className="traveler-controls">
                <button onClick={() => decrement("senior")}>-</button>
                <span>{seniors}</span>
                <button onClick={() => increment("senior")}>+</button>
              </div>
            </div>
            <div className="traveler-row">
              <label>Children:</label>
              <div className="traveler-controls">
                <button onClick={() => decrement("child")}>-</button>
                <span>{children}</span>
                <button onClick={() => increment("child")}>+</button>
              </div>
            </div>
            <div className="traveler-row">
              <label>Infants:</label>
              <div className="traveler-controls">
                <button onClick={() => decrement("infant")}>-</button>
                <span>{infants}</span>
                <button onClick={() => increment("infant")}>+</button>
              </div>
            </div>
            <button className="Done-btn" onClick={handleDoneClick}>
              Done
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default RoundTrip;


const Radio = ({tripType}) => {
  return <>
  <section className="outer-radio">
          {tripType =="round"&&<section className="inner-radio"></section>}
  </section></>
}

const Radio2 = ({tripType}) => {
  return <>
  <section className="outer-radio">
          {tripType =="one"&&<section className="inner-radio"></section>}
  </section></>
}