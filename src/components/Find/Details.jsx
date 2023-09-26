import React from "react";

const Details = ({ details }) => {
  return (
    <div>
      <div
        className="row"
        style={{ marginTop: "30px", border: "1px solid #f2f2f2 " }}
      >
        <div className="col-12">
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
