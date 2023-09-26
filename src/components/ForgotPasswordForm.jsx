import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { FormInputValidate } from "../constants/FormInputValidation";
import { login } from "../features/auth/authSlice";
import { FlatButton } from "./Buttons/FlatButton";
import { FlatButton2 } from "./Buttons/FlatButton2";
import { MuiInput } from "./Inputs/MuiInput";
import FlexContainer from "./Layouts/FlexContainer";

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirm: "",
    },
    validate: FormInputValidate,
    onSubmit: submit,
  });

  async function submit(values) {
    alert("working");
    // // values.preventDefault();
    // const response = await dispatch(login(values));
    // console.log(response, values);
  }

  return (
    <Container>
      <div className="top">
        <h3>Forgot Password</h3>
        <p>
          Don’t panic, your account will be restore. Kindly enter your email
          address linked to your account
        </p>
      </div>

      <div className="main-form">
        <form onSubmit={formik.handleSubmit}>
          <MuiInput
            placeholder="Email"
            id={"email"}
            width={"100%"}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}

          {/*           
          <FlatButton type="submit" width={"100%"}>
            Login
          </FlatButton> */}

          <div className="form-lower">
            <input
              type="submit"
              value="Forgot Password"
              className="w3-round w3-green w3-button"
            />
            <FlatButton2 type="button"> Back to Home</FlatButton2>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ForgotPasswordForm;

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
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p {
          font-weight: 500;
        }
      }
    }
  }
`;
