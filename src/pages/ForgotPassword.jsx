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
import ForgotPasswordForm from "../components/ForgotPasswordForm";
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { isloading, isSuccess, isError, registered, message } = useSelector(
    (store) => store.auth
  );

  useEffect(() => {
    console.log("check me ");
    return () => {};
  }, []);

  const navigate = useNavigate();

  const Notify = ({ message }) => toast(message);

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length < 3) {
      errors.username = "Username must be at 3 Length";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length > 20) {
      errors.password = "Must be 20 characters or less";
    }

    if (!values.confirm_password) {
      errors.confirm_password = "Required";
    } else if (values.confirm_password.length > 20) {
      errors.confirm_password = "Must be 20 characters or less";
    } else if (values.confirm_password !== values.password) {
      errors.confirm_password = "Password do not match";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirm_password: "",
    },
    validate,
    onSubmit: (values) => {
      localStorage.setItem("email", formik.values.email);
      //store email for usage in the next screen
      dispatch(register(values));
    },
  });

  return (
    <>
      <Grid container style={{ height: "100vh" }}>
        <Grid xs={6}>
          <LeftView />
        </Grid>
        <Grid xs={6}>
          <ForgotPasswordForm />
        </Grid>
      </Grid>
    </>
  );
};

export default ForgotPassword;
