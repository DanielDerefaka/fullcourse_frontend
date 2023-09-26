import React from "react";
import "./Landing.css";
import { FaChevronDown } from "react-icons/fa";
import Search from "./Search";

const Props = () => {
  return (
    <div className="box-shadow " data-aos="fade-up-left">
      <div style={{ position: "absolute", marginTop: "5px" }}>
        <div className="flex" style={{ margin: "10px", display: "flex" }}>
          <div className="" style={{ marginRight: "30px" }}>
            <h5>
              {" "}
              Location <FaChevronDown style={{ fontSize: "15px" }} />
            </h5>
            <select
              name=""
              className="form-control"
              id=""
              style={{ border: "none" }}
            >
              <option value="Location">Rivers</option>
            </select>
          </div>
          <div className="" style={{ marginRight: "30px" }}>
            <h5>
              {" "}
              Property <FaChevronDown style={{ fontSize: "15px" }} />
            </h5>
            <select
              name=""
              className="form-control"
              id=""
              style={{ border: "none" }}
            >
              <option value="Location">Duplex</option>
            </select>
          </div>
          <div className="">
            <h5>
              {" "}
              Average Price <FaChevronDown style={{ fontSize: "15px" }} />
            </h5>
            <select
              name=""
              className="form-control"
              id=""
              style={{ border: "none" }}
            >
              <option value="Location">₦2,000,000 - ₦6,000,000</option>
            </select>
          </div>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Props;
