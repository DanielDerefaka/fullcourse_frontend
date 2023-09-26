import { useFormik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { GoogleReCaptcha, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import { FormInputValidate } from "../constants/FormInputValidation";
import { validate } from "../constants/InputValidation";
import { login, reset } from "../features/auth/authSlice";
import { FlatButton } from "./Buttons/FlatButton";
import { FlatButton2 } from "./Buttons/FlatButton2";
import GoogleRecaptcha from "./Google/Recaptcha";
import { MuiInput } from "./Inputs/MuiInput";
import SuccessComp from "./SuccessComponent/SuccessComp";
import SuccessDisplay from "./SuccessComponent/SuccessDisplay";
import SuccessModal from "./SuccessComponent/SuccessModal";
import "react-toastify/dist/ReactToastify.css";
const LoginForm = () => {
  const { isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errors, setError] = useState({
    password: "",
    email: "",
    lastName: "",
    firstName: "",
  });
  const [values, setValues] = useState({
    // userClass: "something",
  });

  useEffect(() => {
    // navigate("/dashboard");

    return () => {
      dispatch(reset());
    };
  }, [isError]);

  const [token, setToken] = useState();
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

  const notify = (message) => toast(message);

  const validate = (values) => {
    console.log(values);
    // validation for email
    if (!values.email) {
      setError({ ...errors, email: "invalid email" });
      return false;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      setError({
        ...errors,
        email: "Not a valid email",
      });
      return false;
    }

    // validation for password
    if (!values.password) {
      setError({
        ...errors,

        password: "Password cannot be blank",
      });
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("hellow");

    // //handle validation
    const valid = validate(values);
    console.log("value for valid", valid);

    if (!valid) return;

    // console.log(valid, "goodluck");
    localStorage.setItem("email", values.email);
    // //store email for usage in the next screen
    dispatch(login(values));
    // setRefreshReCaptcha((r) => !r);
  };
  const handleCaptchaVerify = useCallback((token) => {
    setToken(token);
  });

  if (isError) toast("Login failed, try again");

  return (
    <>
      {isSuccess === false && (
        <Container>
          <div className="top">
            <h3>Welcome back</h3>
            <p>please enter your details</p>
          </div>

          <div className="main-form">
            <form onSubmit={handleSubmit}>
              <MuiInput
                // error={errors.email}
                placeholder="email"
                width={"100%"}
                id={"email"}
                onChange={handleChange}
                value={values.email}
              />

              <MuiInput
                error={errors.password}
                placeholder="password"
                width={"100%"}
                type="password"
                id={"password"}
                onChange={handleChange}
                value={values.password}
              />

              {/* <GoogleRecaptcha /> */}
              {/* <YourReCaptchaComponent /> */}
              {/* <GoogleReCaptcha
            onVerify={handleCaptchaVerify}
            refreshReCaptcha={refreshReCaptcha}
          /> */}

              <FlatButton type="submit" width="100%">
                Login
              </FlatButton>

              <div className="form-lower">
                <p>Dont have an account?</p>
                <FlatButton2 onClick={() => navigate("/signup")} type="button">
                  {" "}
                  Create Account
                </FlatButton2>
              </div>
            </form>
          </div>
        </Container>
      )}

      {isSuccess && (
        <Container>
          <SuccessComp redirect_to={"dashboard"} message="Login successful" />
        </Container>
      )}

      <ToastContainer />
    </>
  );
};

export default LoginForm;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem;
  gap: 2rem;

  .top {
    display: flex;
    flex-direction: column;

    h3 {
      font-weight: 900;
    }

    p {
      font-weight: 400;
    }
  }

  .main-form {
    height: 70%;

    form {
      .form-lower {
        margin: 2rem 0rem;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          font-weight: 500;
        }
      }
    }
  }
`;
