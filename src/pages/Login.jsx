import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, useNavigate } from "react-router-dom";
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import ErrorDisplay from "../components/ErrorComponent/ErrorDisplay";
import ErrorModal from "../components/ErrorComponent/ErrorModal";
import FormInput from "../components/Inputs/FormInput";
import { CenterContainer } from "../components/Layouts/CenterContainer";
import { SizedContainer } from "../components/Layouts/Container";
import LeftView from "../components/LeftView";
import Logo from "../components/Logo";
import Spinner from "../components/Spinner";
import SuccessDisplay from "../components/SuccessComponent/SuccessDisplay";
import SuccessModal from "../components/SuccessComponent/SuccessModal";
import { login, reset } from "../features/auth/authSlice";
import Grid from "@mui/material/Grid";
import LoginForm from "../components/LoginForm";
import { FormInputValidate } from "../constants/FormInputValidation";
import { useFormik } from "formik";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isSuccess, isError, message, isLoading } = useSelector(
    (state) => state.auth
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Grid container style={{ height: "100vh" }}>
        <Grid xs={6}>
          <LeftView />
        </Grid>
        <Grid xs={6}>
          <LoginForm />
        </Grid>
      </Grid>
    </>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
