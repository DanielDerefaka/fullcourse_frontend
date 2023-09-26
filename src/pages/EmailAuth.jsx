import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { CurvedButton } from "../components/Buttons/CurvedButton";

import FormInput from "../components/Inputs/FormInput";
import { CenterContainer } from "../components/Layouts/CenterContainer";
import Logo from "../components/Logo";

import OTPInput, { ResendOTP } from "otp-input-react";
import { verify_otp } from "../features/auth/authSlice";
import LeftView from "../components/LeftView";
import EmailAuthComponent from "../components/EmailAuthComponent";

const EmailAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    name === "otp" && setOtp(value);
  };

  const authorize = (e) => {
    e.preventDefault();

    //do validation

    if (otp.length < 4) return;

    dispatch(
      verify_otp({
        otp,
        email: localStorage.getItem("email"),
      })
    );

    alert("see me ");
  };
  return (
    <>
      <Grid container style={{ height: "100vh" }}>
        <Grid xs={6}>
          <LeftView />
        </Grid>
        <Grid xs={6}>
          <EmailAuthComponent />
        </Grid>
      </Grid>
    </>
  );
};

export default EmailAuth;
