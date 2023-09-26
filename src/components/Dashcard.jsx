import React from "react";

const Dashcard = ({ icon, type, quantity }) => {
  return (
    <div className="w3-quarter w3-padding">
      <div className="w3-round-large w3-card w3-padding">
        <i className={icon} id="icon1"></i>
        <p>{type}</p>
        <h4>{quantity}</h4>
      </div>
    </div>
  );
};

export default Dashcard;
