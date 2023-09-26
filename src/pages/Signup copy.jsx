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
import SuccessModal from "../components/SuccessComponent/SuccessModal";
import SuccessDisplay from "../components/SuccessComponent/SuccessDisplay";
import ErrorModal from "../components/ErrorComponent/ErrorModal";
import ErrorDisplay from "../components/ErrorComponent/ErrorDisplay";
import { CenterContainer } from "../components/Layouts/CenterContainer";
import { SizedContainer } from "../components/Layouts/Container";

const Signup = () => {
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
      password: "",
      confirm: "",
      firstName: "",
      lastName: "",
      userClass: "",
    },
    validate,
    onSubmit: (values) => {
      localStorage.setItem("email", formik.values.email);
      //store email for usage in the next screen
      // dispatch(register(values));
    },
  });

  return (
    <>
      <CenterContainer>
        {isloading && <Spinner />}
        {!isloading && !registered && (
          <div className="w3-padding-64">
            <div
              className="w3-round w3-margin-top w3-margin-bottom"
              id="create"
            >
              {!isloading && (
                <>
                  <SizedContainer>
                    <form className="w3-padding" onSubmit={formik.handleSubmit}>
                      <div className="w3-center w3-margin-bottom">
                        <img src={logo} alt="" />
                        <h3 className="w3-text-green">
                          <b>Create Account</b>
                        </h3>
                      </div>
                      {formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                      ) : null}
                      <FormInput
                        title={"Email"}
                        type="email"
                        id={"email"}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />

                      {formik.errors.username ? (
                        <div>{formik.errors.username}</div>
                      ) : null}
                      <FormInput
                        title={"Username"}
                        type="text"
                        id={"username"}
                        value={formik.values.username}
                        onChange={formik.handleChange}
                      />

                      {formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                      ) : null}
                      <FormInput
                        title={"Password"}
                        type="password"
                        id={"password"}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />

                      {formik.errors.confirm_password ? (
                        <div>{formik.errors.confirm_password}</div>
                      ) : null}
                      <FormInput
                        title={"Confirm Password"}
                        type="password"
                        id={"confirm_password"}
                        value={formik.values.confirm_password}
                        onChange={formik.handleChange}
                      />

                      <div className="w3-center w3-margin-top w3-margin-bottom">
                        <input
                          type="submit"
                          value="Create Account"
                          className="w3-round w3-green w3-button"
                        />
                        <div className="w3-margin-bottom">
                          <p className="w3-small">
                            Already have an account?{" "}
                            <Link to="/login" className="w3-text-green">
                              Login now
                            </Link>{" "}
                          </p>
                        </div>
                      </div>
                    </form>
                  </SizedContainer>
                </>
              )}
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

            {isError && (
              <ErrorModal isOpen={true} header title={"Failed"}>
                <ErrorDisplay message={message} />
              </ErrorModal>
            )}
          </div>
        )}

        {/* {registered && (
        <div className="w3-padding-64">
          <div className="w3-round w3-margin-top w3-margin-bottom" id="create">
            <div>
              <span> Registration is succesful</span>
              <button onClick={() => navigate("/login")}> Login now </button>
            </div>
          </div>
        </div>
      )} */}

        <ToastContainer />
      </CenterContainer>
    </>
  );
};

export default Signup;
