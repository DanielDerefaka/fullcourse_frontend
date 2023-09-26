import React from "react";
import { FaChartLine } from "react-icons/fa";

const Card = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3 card1">
          <div className="card_component">
            <FaChartLine className="icon" />
            <span class="txt"> 5 </span>
          </div>
          <div className="card-bottom">
            <h4> Property Acquired</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
