import React from "react";
import Logo from "../../components/Logo";

import "./style.css";
const PageNotFound = () => {
  return (
    <div id="notfound">
      <div className="logo">
        <Logo size={300} />
      </div>
      <div className="notfound">
        <div className="notfound-404">
          <h3>Oops! Page not found</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>we are sorry, but the page you requested was not found</h2>
      </div>
    </div>
  );
};

export default PageNotFound;
