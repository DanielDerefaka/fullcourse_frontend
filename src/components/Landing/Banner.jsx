import React from "react";
import Ban from "./img/Landing.png";
import "./Landing.css";
import Button from "./Button";
import Props from "./Props";

const Banner = () => {
  return (
    <div data-aos="slide-up" className="">
      <div className="txt">
        <h1 className="head">
          {" "}
          Building <span style={{ color: "#44842F" }}> dream homes </span> just
          for you.
        </h1> 
        <div
          style={{
            fontSize: "18px",
            fontWeight: "200",
            width: "500px",
            marginTop: "20px",
          }}
        >
          <p>
            {" "}
            We are real estate agency contributing a lion share in providing
            affordable and secure housing solution in Nigeria
          </p>
        </div>
        <Props />
      </div>
      <img className="im" src={Ban} alt="banner" />
    </div>
  );
};

export default Banner;
