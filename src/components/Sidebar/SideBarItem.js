import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const SideBarItem = ({ link, display, icon, color, type }) => {
  const { pathname } = useLocation();

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname && pathname.split("/");

  return (
    <div title={display}>
      <a
        href={link}
        className={`nav_link ${splitLocation[1] === link && "active"}`}
      >
        <box-icon
          type={"regular"}
          name={icon || "rocket"}
          color={"white"}
        
          // animation={"tada"}
        ></box-icon>

        {/* <i className="bx bx-grid-alt nav_icon"></i> */}
        <span className="nav_name">{display}</span>
      </a>
    </div>
  );
};

export default SideBarItem;
