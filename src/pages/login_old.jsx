import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, useNavigate } from "react-router-dom";
import { Router } from "react-router-dom";
import logo from "../assets/images/logo.png";
import FormInput from "../components/Inputs/FormInput";
import Logo from "../components/Logo";
// import { loadUserInfo, loginUser } from "../features/auth/authActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess === true) {
      navigate("/estate");
      // dispatch(loadUserInfo());
    }
  }, [isSuccess, navigate]);

  const handleInputOnchange = (e) => {
    //destructure
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        console.log("nothing");
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    // minor validation
    if (!email && !password) {
      return;
    }

    const payload = {
      email,
      password,
    };
    // const call = await dispatch(loginUser(payload));
    // console.log(call);
  };
  
  return (
    <div className="w3-padding-64">
      <div className="w3-round" id="create">
        <form className="w3-padding" onSubmit={submit}>
          <div className="w3-center w3-margin-bottom">
            <Logo />
            <h3 className="w3-text-green">
              <b>Login</b>
            </h3>
          </div>
          <FormInput
            title={"Email"}
            type="email"
            value={email}
            id={"email"}
            onChange={handleInputOnchange}
          />
          <FormInput
            title={"Password"}
            type="password"
            value={password}
            id={"password"}
            onChange={handleInputOnchange}
          />
          <div className="w3-center w3-margin-top w3-margin-bottom">
            <input
              type="submit"
              value="Login"
              className="w3-round w3-green w3-button"
            />
            <br />
            <div className="w3-margin-bottom">
              <p className="w3-small">
                Don't have an account yet?{" "}
                <Link to="/signup" className="w3-text-green">
                  Signup now
                </Link>{" "}
              </p>
              <p className="w3-small w3-margin-bottom">
                <Link to="/">Forgot your password?</Link>{" "}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
