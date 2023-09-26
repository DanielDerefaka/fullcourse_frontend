import React from "react";
import { useDispatch } from "react-redux";
import "./sidenav.css";
import { AdminSidebarData as SideBarData } from "./AdminSidebarData";
import SideBarItem from "./SideBarItem";
import { logout } from "../../features/auth/authSlice";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../Logo";

const AdminSideNav = () => {
  const [selected, setSelected] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();

  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <div>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
            <div className="nav_list">
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
            </div>
          </div>
          <a href="##" className="nav_link" onClick={() => dispatch(logout())}>
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">Logout </span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default AdminSideNav;
