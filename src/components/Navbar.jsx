import React from "react";
import logo from "../assets/images/logo.png";
import { FaCartPlus, FaWallet } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <header class="header" id="header">
        <div class="header_toggle">
          <img src={logo} className="imm" />
        </div>
        <div className="row">
          <div className="col-md-3">
            <FaCartPlus />
          </div>
          <div className="col-md-3">
            <FaWallet />
          </div>
        </div>
        <div class="header_img">
          <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
        </div>
      </header>
      <div class="l-navbar" id="nav-bar">
        <div id="header-toggle">
          <nav class="nav ">
            <div>
              <a href="#" class="nav_logo">
                <i class="bx bx-layer nav_logo-icon"></i>
                <span class="nav_logo-name">Capital City</span>
              </a>
              <div class="nav_list">
                <a href="#" class="nav_link active">
                  <i class="bx bx-grid-alt nav_icon"></i>
                  <span class="nav_name">Dashboard</span>
                </a>
                <a href="#" class="nav_link">
                  <i class="bx bx-user nav_icon"></i>
                  <span class="nav_name">General Label</span>
                </a>
                <a href="#" class="nav_link">
                  <i class="bx bx-message-square-detail nav_icon"></i>
                  <span class="nav_name">Test</span>
                </a>
                <a href="#" class="nav_link">
                  <i class="bx bx-bookmark nav_icon"></i>
                  <span class="nav_name">Upload Tracking </span>
                </a>
                <a href="#" class="nav_link">
                  <i class="bx bx-folder nav_icon"></i>
                  <span class="nav_name">Bulk </span>
                </a>
                <a href="#" class="nav_link">
                  <i class="bx bx-bar-chart-alt-2 nav_icon"></i>
                  <span class="nav_name">Building</span>
                </a>
              </div>
            </div>
            <a href="#" class="nav_link">
              <i class="bx bx-log-out nav_icon"></i>
              <span class="nav_name">SignOut</span>
            </a>
          </nav>
        </div>
      </div>
      {/* <!--Container Main start--> */}
    </div>
  );
};

export default Navbar;
