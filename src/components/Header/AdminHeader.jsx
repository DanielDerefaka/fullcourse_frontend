import React from "react";
import { FaCartPlus, FaWallet } from "react-icons/fa";
import Logo from "../Logo";

const AdminHeader = () => {
  return (
    <>
      <header className="header" id="header">
        <Logo />
        <div className="row">
          <div className="col-md-3">
            <FaCartPlus />
          </div>
          <div className="col-md-3">
            <FaWallet />
          </div>
        </div>
        <div className="header_img">
          <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
        </div>
      </header>
    </>
  );
};

export default AdminHeader;
