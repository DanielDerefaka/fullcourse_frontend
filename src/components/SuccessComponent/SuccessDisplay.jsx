import React from "react";
import "./styles.css";
import { GrStatusGood } from "react-icons/gr";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../../features/auth/authSlice";
import Lottie from "lottie-react";
import tick from "../../assets/lottie/green_tick.json";

const SuccessDisplay = ({ message }) => {
  const { isSuccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="error">
      <Lottie animationData={tick} loop />
      <p>{message}</p>
    </div>
  );
};

export default SuccessDisplay;
