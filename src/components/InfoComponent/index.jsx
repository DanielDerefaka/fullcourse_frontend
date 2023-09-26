import React from "react";
import "./info.css";

const InfoComponent = ({ title }) => {
  return (
    <div>
      <div className="info-component">
        <div className="info-title">
          <h3>{title}</h3>
        </div>
        <input type="text" className="search-box " placeholder="Search..." />
      </div>
    </div>
  );
};

export default InfoComponent;
