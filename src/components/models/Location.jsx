import React from "react";

import "./ShopModel/shop.css";
import Button from './Button'

const Location = () => {
  return (
    <div>
      <div className="bx2">
        <div style={{ marginTop: "10px", marginLeft:'10px' }}>
        <h4> Filter By Location</h4>
          <div className="row">
           
            <div className="col-md-4">
              
              <select
                name=""
                className="form-control  bx"
                style={{ color: "black", fontSize: "20px" }}
                id=""
              >
                <option value="" style={{ fontSize: "20px" }}>
                  {" "}
                  Nigeria
                </option>
                <option value="" style={{ fontSize: "20px" }}>
                  {" "}
                  Nigeria
                </option>
                <option value="" style={{ fontSize: "20px" }}>
                  {" "}
                  Nigeria
                </option>
                <option value="" style={{ fontSize: "20px" }}>
                  {" "}
                  Nigeria
                </option>
                <option value="" style={{ fontSize: "20px" }}>
                  {" "}
                  Nigeria
                </option>
              </select>
            </div>
            <div className="col-md-4">
           <Button/>
            </div>
          
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Location;
