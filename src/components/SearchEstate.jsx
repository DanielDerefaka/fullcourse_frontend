import React from "react";

const SearchEstate = ({ title }) => {
  return (
    <div className="w3-light-grey sbar">
      <div className="w3-row">
        <div className="w3-col s7">
          <h3>{title}</h3>
        </div>
        <div className="w3-col s5">
          <input
            type="text"
            className="search w3-small w3-input w3-white w3-round"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default SearchEstate;
