import React from "react";
import Action from "../Action";
import build from "./img/clarity_building-solid.svg";
import Land from "./img/ri_landscape-fill.svg";
import materials from "./img/vaadin_tools.svg";

const Counter = () => {
  return (
    <div data-aos="slide-left">
      <div style={{ marginLeft: "250px", marginTop: "20px", margin: "70px" }}>
        <div className="row">
          <Action
            details={
              "we provide basic to advance structures to enable good height and management (demo content)"
            }
            heading="Building"
            image={build}
          />
          <Action
            details={
              "We have numerous plots of Land which you can buy at any location. (demo content)"
            }
            heading="Land"
            image={Land}
          />
          <Action
            details={
              "Now you can contact vendors and purchase building materials from us without leaving us (demo content) "
            }
            heading="Building Materials"
            image={materials}
          />
        </div>
      </div>
    </div>
  );
};

export default Counter;
