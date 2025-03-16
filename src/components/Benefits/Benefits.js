import React from "react";
import "./Benefits.css";

const Benefits = (props) => {
  return (
    <>
      <div className="benefits-box">
        <div className="images-headset">
          <img src={props.Headset} alt="" />
        </div>
        <div className="benefit-para">
          <h4>{props.heading}</h4>
          <p className="roboto-300">{props.describe}</p>
        </div>
      </div>
    </>
  );
};

export default Benefits;
