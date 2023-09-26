import React, { useState } from "react";
import "../Sidenav/Sidebar.css"
import logo from "./assets/favicon.ico";
import { BiChevronLeft, BiChevronRight} from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SideBarData } from "./SideBarData";
import SideBarItem from "../Sidenav/SideBarItem2";
import { logout } from "../../features/auth/authSlice";


const Sidenav = () => {
  const [inactive, setinactive] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt={logo} />
        </div>
        <div onClick={() => setinactive(!inactive)} className="toggle-menu-btn">
          {!inactive ? (
            <BiChevronRight />
          ) : (
            <BiChevronLeft className="BiChevronLeft" />
          )}
        </div>
      </div>
      <div className="main-menu">
        <ul>
          <li className="menu-item">
          {SideBarData.map((menu) => {
                return (
                  <SideBarItem
                    key={menu.menu}
                    display={menu.display}
                    link={menu.link}
                    icon={menu.icon}
                    type={menu.type}
                  />
                );
              })}
          </li>
          <li className="menu-item">
          <a className="nav_link" onClick={() => dispatch(logout())}>
            <box-icon
              type={"regular"}
              name={"power-off"}
              color={"white"}
              className="menu-icon"
              // animation={"tada"}
            ></box-icon>
          </a>

          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
