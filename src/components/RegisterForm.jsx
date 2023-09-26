import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FormInputValidate } from "../constants/FormInputValidation";
import { login, register } from "../features/auth/authSlice";
import { FlatButton } from "./Buttons/FlatButton";
import { FlatButton2 } from "./Buttons/FlatButton2";
import FormInput from "./Inputs/FormInput";
import { MuiInput } from "./Inputs/MuiInput";
import { MuiSelect } from "./Inputs/MuiSelect";
import FlexContainer from "./Layouts/FlexContainer";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Spinner from "./Spinner";
import SuccessModal from "./SuccessComponent/SuccessModal";
import SuccessDisplay from "./SuccessComponent/SuccessDisplay";
import ErrorModal from "./ErrorComponent/ErrorModal";
import ErrorDisplay from "./ErrorComponent/ErrorDisplay";
const RegisterForm = () => {
  const { isloading, isSuccess, isError, registered, message } = useSelector(
    (store) => store.auth
  );
  const dispatch = useDispatch();

  const [errors, setError] = useState({
    password: "",
    email: "",
    lastName: "",
    firstName: "",
  });
  const [values, setValues] = useState({
    // userClass: "something",
  });

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

    // validation for firstName
    if (!values.firstName) {
      setError({
        ...errors,

        firstName: "Required",
      });
      return false;
    }
    // validation for lastName
    if (!values.lastName) {
      setError({
        ...errors,

        lastName: "Required",
      });
      return false;
    }

    // validation for userClass
    if (!values.userClass) {
      setError({
        ...errors,

        userClass: "Required",
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

    // validation for confirm password
    if (!values.confirm) {
      setError({
        ...errors,

        confirm: "required",
      });
      return false;
    }
    // check if the password matches the confirm password
    if (values.password !== values.confirm) {
      setError({
        ...errors,

        confirm: "Cannot be empty",
      });
      return false;
    }

    console.log(errors);
    //clear the error
    setError({});

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    // alert("hello world");

    e.preventDefault();

    //handle validation
    const valid = validate(values);

    if (!valid) return;

    console.log(valid);
    localStorage.setItem("email", values.email);
    //store email for usage in the next screen
    dispatch(register(values));
  };

  return (
    <Container>
      {isloading && <Spinner />}
      {
        <>
          <div className="top">
            <h3>Create Account</h3>
          </div>

          <div className="main-form">
            <form action="" onSubmit={handleSubmit}>
              <FlexContainer justify_content="space-between">
                <MuiInput
                  width={"100%"}
                  error={errors.firstName}
                  placeholder="First Name"
                  id={"firstName"}
                  onChange={handleChange}
                  value={values.firstName}
                />

                <MuiInput
                  error={errors.lastName}
                  placeholder="Last Name"
                  id={"lastName"}
                  width="100%"
                  onChange={handleChange}
                  value={values.lastname}
                />
              </FlexContainer>

              <div className="">
                <MuiInput
                  error={errors.email}
                  type={"email"}
                  placeholder="Email"
                  id={"email"}
                  width={"80%"}
                  onChange={handleChange}
                  value={values.email}
                />
              </div>

              <div className="">
                <MuiSelect>
                  <label htmlFor="userClass"> Registration Type</label>
                  <Select
                    labelId="demo-simple-select-label"
                    id="userClass"
                    name={"userClass"}
                    label="Registration Type"
                    value={values.userClass}
                    onChange={handleChange}
                    fullWidth
                  >
                    <MenuItem>SELECT AN OPTION</MenuItem>
                    <MenuItem value="REGULAR">REGULAR</MenuItem>
                    <MenuItem value="AGENT">AGENT</MenuItem>
                    <MenuItem value="SUPPLIER">SUPPLIER</MenuItem>
                    <MenuItem value="PROPERTY-AGENT">PROPERTY-AGENT</MenuItem>
                  </Select>
                </MuiSelect>
              </div>

              <FlexContainer justify_content="space-between">
                <MuiInput
                  error={errors.password}
                  placeholder="Password"
                  id={"password"}
                  type="password"
                  onChange={handleChange}
                  value={values.password}
                />

                <MuiInput
                  // error={errors.confirm}
                  placeholder="Confirm Password"
                  id={"confirm"}
                  type="password"
                  width="100%"
                  onChange={handleChange}
                  value={values.confirm}
                />
              </FlexContainer>

              <FlatButton type="submit" width="100%">
                Register
              </FlatButton>
            </form>
          </div>

          {isSuccess && (
            <SuccessModal
              isOpen={isSuccess}
              header
              title={"Successful"}
              redirect_to="email-auth"
            >
              <SuccessDisplay message={"Registration Successful"} />
            </SuccessModal>
          )}

          {message && (
            <ErrorModal isOpen={isError} header title={"Failed"}>
              <ErrorDisplay message={message} />
            </ErrorModal>
          )}
        </>
      }
    </Container>
  );
};

export default RegisterForm;

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
      .form-control {
      }

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

const FlexCon = styled.div`
  display: flex;
  gap: 10px;

  width: 100%;

  .form-control {
    width: 100%;
  }
`;
