import React from "react";
import "./styles.css";
import { MdOutlineError } from "react-icons/md";
import Lottie from "lottie-react";

import error_lottie from "../../assets/lottie/error.json";

const ErrorDisplay = ({ message }) => {
  return (
    <div className="error">
      <Lottie animationData={error_lottie} loop />
      {/* <MdOutlineError color="red" size={30} /> */}
      <p>{message}</p>
    </div>
  );
};

export default ErrorDisplay;
