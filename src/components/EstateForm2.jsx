import React from "react";

const PriceFilter = () => {
  return (
    <div>
      <div className="w3-padding-32 w3-padding w3-round-large w3-light-grey w3-margin-bottom">
        <h3>Price</h3>
        <div className="w3-row">
          <div className="w3-col s4">
            <input
              type="text"
              className="w3-input w3-white w3-round"
              placeholder="Min"
            />
          </div>
          <div className="w3-col s4 w3-center">
            <p> - </p>
          </div>
          <div className="w3-col s4">
            <input
              type="text"
              className="w3-input w3-white w3-round"
              placeholder="Max"
            />
          </div>
        </div>
        <input type="text" className="w3-input w3-white w3-round" />
      </div>
    </div>
  );
};

export default PriceFilter;
