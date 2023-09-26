import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import FormInput from "../components/Inputs/FormInput";
import Spinner from "../components/Spinner";

import { useFormik } from "formik";
import { register, reset } from "../features/auth/authSlice";
import { toast, ToastContainer } from "react-toastify";
import Grid from "@mui/material/Grid";
import LoginForm from "../components/LoginForm";
import LeftView from "../components/LeftView";
import RegisterForm from "../components/RegisterForm";
const Signup = () => {
  return (
    <>
      <Grid container style={{ height: "100vh" }}>
        <Grid xs={6}>
          <LeftView />
        </Grid>
        <Grid xs={6}>
          <RegisterForm />
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
